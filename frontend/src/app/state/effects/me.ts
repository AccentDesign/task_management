import { APIBaseEffects } from '../api';
import { Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MeEffects extends APIBaseEffects {
    protected url = '/api/users/me/';
    protected prefix = '[Me]';

    @Effect() load$ = this._all$(
        `${this.prefix} LOAD`,
        `${this.prefix} LOAD_SUCCESS`
    );

}
