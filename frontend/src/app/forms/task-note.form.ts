import * as _ from 'lodash';
import * as actions from '../state/actions';

import { ActionsSubject, Store } from '@ngrx/store';
import { BaseForm, FormCleanAfterMethod, IFormOptions } from './base.form';
import { FormControl, Validators } from '@angular/forms';
import { filter, take } from 'rxjs/operators';

import { AppState } from '../state/state';
import { IActionWithPayload } from './../state/models';

const options: IFormOptions = {
    alwaysEditable: true,
    cleanAfterMethod: FormCleanAfterMethod.resetToInitial
}

export class TaskNoteForm extends BaseForm {

    controls: {
        id: FormControl
        task: FormControl
        note: FormControl
    };
    createAction = actions.TaskNoteActions.ADD;
    createSuccessAction = actions.TaskNoteActions.ADD_SUCCESS;
    updateAction = actions.TaskNoteActions.UPDATE;
    updateSuccessAction = actions.TaskNoteActions.UPDATE_SUCCESS;
    deleteAction = actions.TaskNoteActions.REMOVE;
    deleteSuccessAction = actions.TaskNoteActions.REMOVE_SUCCESS;

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
                note: new FormControl('', Validators.required)
            },
            null,
            null,
            _.assign({}, options, formOptions)
        );
    }
}
