import { APIBaseEffects } from '../api';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Effect, ofType } from '@ngrx/effects';
import { HttpActions } from '../actions';
import { IActionWithPayload } from '../models';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TaskActions } from './../actions/task';


@Injectable({
    providedIn: 'root'
})
export class JobEffects extends APIBaseEffects {
    protected url = '/api/jobs/';
    protected prefix = '[Job]';

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
    @Effect() remove$ = this._remove$(
        `${this.prefix} REMOVE`,
        `${this.prefix} REMOVE_SUCCESS`
    );
    @Effect() public socket$ = this._socket$(
        'wip.job',
        `${this.prefix} LOAD_ONE`,
        `${this.prefix} LOAD_ONE`,
        `${this.prefix} REMOVE_SUCCESS`
    );
}
