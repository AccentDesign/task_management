import * as _ from 'lodash';
import * as actions from '../state/actions';

import { ActionsSubject, Store } from '@ngrx/store';
import { BaseForm, FormCleanAfterMethod, IFormOptions } from './base.form';
import { FormControl, Validators } from '@angular/forms';
import { filter, take } from 'rxjs/operators';

import { AppState } from '../state/state';
import { IActionWithPayload } from './../state/models';

const options: IFormOptions = {
    alwaysEditable: false,
    cleanAfterMethod: FormCleanAfterMethod.loadSaved
}

export class TaskTargetDateForm extends BaseForm {

    controls: {
        id: FormControl
        target_date: FormControl
    };
    createAction = actions.TaskActions.ADD;
    createSuccessAction = actions.TaskActions.ADD_SUCCESS;
    updateAction = actions.TaskActions.PATCH;
    updateSuccessAction = actions.TaskActions.PATCH_SUCCESS;

    constructor(
        protected store: Store<AppState>,
        protected actionsSubject: ActionsSubject,
        formOptions?: IFormOptions
    ) {
        super(
            store,
            actionsSubject,
            {
                id: new FormControl(null),
                target_date: new FormControl(null)
            },
            null,
            null,
            _.assign({}, options, formOptions)
        );

        // when the date field is emptied set it to null as an empty
        // string is an invalid date format in drf.
        const sub = this.controls.target_date.valueChanges.subscribe(value => {
            if (value === '') {
                this.controls.target_date.setValue(null);
            }
        });
        this._subscriptions.push(sub);
    }
}
