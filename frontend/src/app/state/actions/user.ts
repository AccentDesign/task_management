import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { IUser } from '../reducers/user';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserActions {

    static LOAD_ALL = '[User] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[User] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[User] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[User] LOAD_ONE_SUCCESS';

    LoadAll(): Action {
        return { type: UserActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: IUser[]): IActionWithPayload {
        return { type: UserActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: UserActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: IUser): IActionWithPayload {
        return { type: UserActions.LOAD_ONE_SUCCESS, payload };
    }

}
