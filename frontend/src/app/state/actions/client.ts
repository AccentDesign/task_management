import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { IClient } from '../reducers/client';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientActions {

    static LOAD_ALL = '[Client] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[Client] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[Client] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[Client] LOAD_ONE_SUCCESS';
    static ADD = '[Client] ADD';
    static ADD_SUCCESS = '[Client] ADD_SUCCESS';
    static UPDATE = '[Client] UPDATE';
    static UPDATE_SUCCESS = '[Client] UPDATE_SUCCESS';
    static REMOVE = '[Client] REMOVE';
    static REMOVE_SUCCESS = '[Client] REMOVE_SUCCESS';

    LoadAll(): Action {
        return { type: ClientActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: IClient[]): IActionWithPayload {
        return { type: ClientActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: ClientActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: IClient): IActionWithPayload {
        return { type: ClientActions.LOAD_ONE_SUCCESS, payload };
    }

    Add(payload: IClient): IActionWithPayload {
        return { type: ClientActions.ADD, payload };
    }

    AddSuccess(payload: IClient): IActionWithPayload {
        return { type: ClientActions.ADD_SUCCESS, payload };
    }

    Update(payload: IClient): IActionWithPayload {
        return { type: ClientActions.UPDATE, payload };
    }

    UpdateSuccess(payload: IClient): IActionWithPayload {
        return { type: ClientActions.UPDATE_SUCCESS, payload };
    }

    Remove(payload: IClient): IActionWithPayload {
        return { type: ClientActions.REMOVE, payload };
    }

    RemoveSuccess(payload: IClient): IActionWithPayload {
        return { type: ClientActions.REMOVE_SUCCESS, payload };
    }
}
