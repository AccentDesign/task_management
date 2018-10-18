import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { IJob } from '../reducers/job';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JobActions {

    static LOAD_ALL = '[Job] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[Job] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[Job] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[Job] LOAD_ONE_SUCCESS';
    static ADD = '[Job] ADD';
    static ADD_SUCCESS = '[Job] ADD_SUCCESS';
    static UPDATE = '[Job] UPDATE';
    static UPDATE_SUCCESS = '[Job] UPDATE_SUCCESS';
    static REMOVE = '[Job] REMOVE';
    static REMOVE_SUCCESS = '[Job] REMOVE_SUCCESS';

    LoadAll(): Action {
        return { type: JobActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: IJob[]): IActionWithPayload {
        return { type: JobActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: JobActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: IJob): IActionWithPayload {
        return { type: JobActions.LOAD_ONE_SUCCESS, payload };
    }

    Add(payload: IJob): IActionWithPayload {
        return { type: JobActions.ADD, payload };
    }

    AddSuccess(payload: IJob): IActionWithPayload {
        return { type: JobActions.ADD_SUCCESS, payload };
    }

    Update(payload: IJob): IActionWithPayload {
        return { type: JobActions.UPDATE, payload };
    }

    UpdateSuccess(payload: IJob): IActionWithPayload {
        return { type: JobActions.UPDATE_SUCCESS, payload };
    }

    Remove(payload: IJob): IActionWithPayload {
        return { type: JobActions.REMOVE, payload };
    }

    RemoveSuccess(payload: IJob): IActionWithPayload {
        return { type: JobActions.REMOVE_SUCCESS, payload };
    }
}
