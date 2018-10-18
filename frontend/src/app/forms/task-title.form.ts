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

export class TaskTitleForm extends BaseForm {

    controls: {
        id: FormControl
        title: FormControl
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
                title: new FormControl('', Validators.required)
            },
            null,
            null,
            _.assign({}, options, formOptions)
        );
    }
}
