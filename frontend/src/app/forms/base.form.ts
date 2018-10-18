import * as _ from 'lodash';

import { AbstractControl, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { AppState } from './../state/state';
import { IActionWithPayload } from './../state/models';
import { OnDestroy } from '@angular/core';

export enum FormCleanAfterMethod {
    empty = 0,
    resetToInitial = 1,
    loadSaved = 2
}

export interface IFormOptions {
    alwaysEditable?: boolean;
    cleanAfterMethod?: FormCleanAfterMethod;
}

export interface IFormActionResult {
    event: Event,
    payload: any
};

const defaultFormOptions: IFormOptions = {
    alwaysEditable: false,
    cleanAfterMethod: FormCleanAfterMethod.loadSaved
};

export class BaseForm extends FormGroup implements OnDestroy {

    options: IFormOptions;
    initialData: any;
    controls: {};
    createAction: string
    createSuccessAction: string
    updateAction: string
    updateSuccessAction: string
    deleteAction: string
    deleteSuccessAction: string

    private _editable = false;
    private _formDeletedSubject = new Subject<IFormActionResult>();
    private _formSavedSubject = new Subject<IFormActionResult>();

    protected _subscriptions: Subscription[] = [];

    constructor(
        protected store: Store<AppState>,
        protected actionsSubject: ActionsSubject,
        controls: { [key: string]: AbstractControl; },
        validator?: ValidatorFn,
        asyncValidator?: AsyncValidatorFn,
        formOptions?: IFormOptions,
    ) {
        super(controls, validator, asyncValidator);
        // set the options
        this.options = _.assign({}, defaultFormOptions, formOptions);
        // setup the form
        this.editable = this.options.alwaysEditable;
    }
    
    ngOnDestroy() {
        _.each(this._subscriptions, s => s.unsubscribe());
    }

    get formSaved(): Observable<any> {
        return this._formSavedSubject.asObservable();
    }

    get formDeleted(): Observable<any> {
        return this._formDeletedSubject.asObservable();
    }
    
    get editable(): boolean {
        return this._editable;
    }

    set editable(value: boolean) {
        this._editable = value;
        this.setControlState();
    }

    load(data: any) {
        // set the initial data incase we need to reset it
        this.initialData = data;
        // patch the form as no all fields will be defined
        this.patchValue(data);
    }

    save(event: Event) {
        // save the form data
        event.stopPropagation();
        
        if (!this.valid) {
            return;
        }
        
        if (this.createAction && !this.value.id) {
            // create a new record as we have no id
            this.store.dispatch({ type: this.createAction, payload: this.value });
        } else if (this.updateAction && this.value.id) {
            // update or patch the record
            this.store.dispatch({ type: this.updateAction, payload: this.value });
        } else {
            return;
        }
        
        // wait for the result
        this.waitForResult(event);
    }

    cancel(event: Event) {
        event.stopPropagation();

        this.reset(this.initialData);
        
        if (!this.options.alwaysEditable) {
            this.editable = false;
        }
    }

    delete(event: Event) {
        // delete the instance in the form
        event.stopPropagation();
        
        if (!this.deleteAction || !this.value.id) {
            return;
        }

        // delete the record
        this.store.dispatch({ type: this.deleteAction, payload: this.value });
        
        // wait for the result
        this.waitForResult(event);
    }

    resetAndClose(payload) {
        if (this.options.cleanAfterMethod == FormCleanAfterMethod.empty) {
            this.initialData = {};
        } else if (this.options.cleanAfterMethod == FormCleanAfterMethod.loadSaved) {
            this.initialData = payload;
        } else if (this.options.cleanAfterMethod == FormCleanAfterMethod.resetToInitial) {
            // do nothing
        }
        
        this.reset(this.initialData);
        
        if (!this.options.alwaysEditable) {
            this.editable = false;
        }
    }

    setControlState() {
        // enable or disable all controls
        if (this.editable) {
            this.enable();
        } else {
            this.disable();
        }
    }

    waitForResult(event) {
        // all store actions pass through the actionsSubject
        // watch for our save or delete success actions and reset/close the form
        return this.actionsSubject.pipe(
            filter(
                (action: IActionWithPayload) =>
                _.includes([this.createSuccessAction, this.updateSuccessAction, this.deleteSuccessAction], action.type)
            ),
            filter(
                action => this.value.id === null || this.value.id === action.payload.id
            ),
            take(1)
        ).subscribe(
            action => {
                if (this.deleteSuccessAction === action.type) {
                    // after delete totally reset the form
                    // this may need to be taylored later in options but ok for now
                    this.initialData = {};
                    this.reset(this.initialData);
                    this.editable = false;
                    // and push the data to the observable
                    this._formDeletedSubject.next({event: event, payload: action.payload});
                } else {
                    // reset the form
                    this.resetAndClose(action.payload);
                    // and push the data to the observable
                    this._formSavedSubject.next({event: event, payload: action.payload});
                }
            }
        );
    }

}
