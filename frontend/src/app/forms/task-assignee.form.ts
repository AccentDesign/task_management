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

export class TaskAssigneeForm extends BaseForm {

    controls: {
        id: FormControl
        task: FormControl
        user: FormControl
        allocated_hours: FormControl
    };
    createAction = actions.TaskAssigneeActions.ADD;
    createSuccessAction = actions.TaskAssigneeActions.ADD_SUCCESS;
    updateAction = actions.TaskAssigneeActions.UPDATE;
    updateSuccessAction = actions.TaskAssigneeActions.UPDATE_SUCCESS;
    deleteAction = actions.TaskAssigneeActions.REMOVE;
    deleteSuccessAction = actions.TaskAssigneeActions.REMOVE_SUCCESS;

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
                task: new FormControl(null, Validators.required),
                user: new FormControl(null, Validators.required),
                allocated_hours: new FormControl(null, Validators.required)
            },
            null,
            null,
            _.assign({}, options, formOptions)
        );
    }
}
