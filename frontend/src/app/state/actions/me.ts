import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { IMe } from '../reducers/me';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MeActions {

    static LOAD = '[Me] LOAD';
    static LOAD_SUCCESS = '[Me] LOAD_SUCCESS';

    Load(): Action {
        return { type: MeActions.LOAD };
    }

    LoadSuccess(payload: IMe): IActionWithPayload {
        return { type: MeActions.LOAD_SUCCESS, payload };
    }
}
