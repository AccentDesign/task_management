import * as actions from '../actions';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataEffects {

    @Effect() loadData$ = this.updates$.pipe(
        ofType(actions.DataActions.LOAD_DATA),
        mergeMap(
            () => {
                return [
                    new actions.ClientActions().LoadAll(),
                    new actions.JobActions().LoadAll(),
                    new actions.MeActions().Load(),
                    new actions.TaskActions().LoadAll(),
                    new actions.TaskAssigneeActions().LoadAll(),
                    new actions.TaskNoteActions().LoadAll(),
                    new actions.TaskStatusActions().LoadAll(),
                    new actions.UserActions().LoadAll()
                ];
            }
        )
    );

    constructor(
        private updates$: Actions
    ) {}
}
