import * as _ from 'lodash';
import * as actions from '../state/actions';

import { ActionsSubject, Store } from '@ngrx/store';
import { BaseForm, FormCleanAfterMethod, IFormOptions } from './base.form';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from '../state/state';

const options: IFormOptions = {
    alwaysEditable: true,
    cleanAfterMethod: FormCleanAfterMethod.resetToInitial
}

export class TaskCreateForm extends BaseForm {

    controls: {
        id: FormControl
        title: FormControl
        description: FormControl
        job: FormControl
        target_date: FormControl
        status: FormControl
    };
    createAction = actions.TaskActions.ADD;
    createSuccessAction = actions.TaskActions.ADD_SUCCESS;

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
                title: new FormControl('', Validators.required),
                description: new FormControl(''),
                job: new FormControl(null, Validators.required),
                target_date: new FormControl(null),
                status: new FormControl(null, Validators.required)
            },
            null,
            null,
            _.assign({}, options, formOptions)
        );
    }
}
