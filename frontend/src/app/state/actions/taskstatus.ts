import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { ITaskStatus } from '../reducers/taskstatus';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskStatusActions {

    static LOAD_ALL = '[TaskStatus] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[TaskStatus] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[TaskStatus] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[TaskStatus] LOAD_ONE_SUCCESS';

    LoadAll(): Action {
        return { type: TaskStatusActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: ITaskStatus[]): IActionWithPayload {
        return { type: TaskStatusActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: TaskStatusActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: ITaskStatus): IActionWithPayload {
        return { type: TaskStatusActions.LOAD_ONE_SUCCESS, payload };
    }

}
