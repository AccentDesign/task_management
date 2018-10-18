import { APIBaseEffects } from '../api';
import { Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskAssigneeEffects extends APIBaseEffects {
    protected url = '/api/task-assignees/';
    protected prefix = '[TaskAssignee]';

    @Effect() all$ = this._all$(
        `${this.prefix} LOAD_ALL`,
        `${this.prefix} LOAD_ALL_SUCCESS`
    );
    @Effect() one$ = this._one$(
        `${this.prefix} LOAD_ONE`,
        `${this.prefix} LOAD_ONE_SUCCESS`
    );
    @Effect() add$ = this._add$(
        `${this.prefix} ADD`,
        `${this.prefix} ADD_SUCCESS`
    );
    @Effect() update$ = this._update$(
        `${this.prefix} UPDATE`,
        `${this.prefix} UPDATE_SUCCESS`
    );
    @Effect() patch$ = this._patch$(
        `${this.prefix} PATCH`,
        `${this.prefix} PATCH_SUCCESS`
    );
    @Effect() remove$ = this._remove$(
        `${this.prefix} REMOVE`,
        `${this.prefix} REMOVE_SUCCESS`
    );

}
