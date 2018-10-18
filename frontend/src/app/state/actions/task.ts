import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { ITask } from '../reducers/task';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskActions {

    static LOAD_ALL = '[Task] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[Task] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[Task] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[Task] LOAD_ONE_SUCCESS';
    static ADD = '[Task] ADD';
    static ADD_SUCCESS = '[Task] ADD_SUCCESS';
    static UPDATE = '[Task] UPDATE';
    static UPDATE_SUCCESS = '[Task] UPDATE_SUCCESS';
    static PATCH = '[Task] PATCH';
    static PATCH_SUCCESS = '[Task] PATCH_SUCCESS';
    static REMOVE = '[Task] REMOVE';
    static REMOVE_SUCCESS = '[Task] REMOVE_SUCCESS';

    LoadAll(): Action {
        return { type: TaskActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: ITask[]): IActionWithPayload {
        return { type: TaskActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: TaskActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: ITask): IActionWithPayload {
        return { type: TaskActions.LOAD_ONE_SUCCESS, payload };
    }

    Add(payload: ITask): IActionWithPayload {
        return { type: TaskActions.ADD, payload };
    }

    AddSuccess(payload: ITask): IActionWithPayload {
        return { type: TaskActions.ADD_SUCCESS, payload };
    }

    Update(payload: ITask): IActionWithPayload {
        return { type: TaskActions.UPDATE, payload };
    }

    UpdateSuccess(payload: ITask): IActionWithPayload {
        return { type: TaskActions.UPDATE_SUCCESS, payload };
    }

    Patch(payload: ITask): IActionWithPayload {
        return { type: TaskActions.PATCH, payload };
    }

    PatchSuccess(payload: ITask): IActionWithPayload {
        return { type: TaskActions.PATCH_SUCCESS, payload };
    }

    Remove(payload: ITask): IActionWithPayload {
        return { type: TaskActions.REMOVE, payload };
    }

    RemoveSuccess(payload: ITask): IActionWithPayload {
        return { type: TaskActions.REMOVE_SUCCESS, payload };
    }
}
