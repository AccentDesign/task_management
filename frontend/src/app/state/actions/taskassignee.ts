import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { ITaskAssignee } from '../reducers/taskassignee';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskAssigneeActions {

    static LOAD_ALL = '[TaskAssignee] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[TaskAssignee] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[TaskAssignee] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[TaskAssignee] LOAD_ONE_SUCCESS';
    static ADD = '[TaskAssignee] ADD';
    static ADD_SUCCESS = '[TaskAssignee] ADD_SUCCESS';
    static UPDATE = '[TaskAssignee] UPDATE';
    static UPDATE_SUCCESS = '[TaskAssignee] UPDATE_SUCCESS';
    static PATCH = '[TaskAssignee] PATCH';
    static PATCH_SUCCESS = '[TaskAssignee] PATCH_SUCCESS';
    static REMOVE = '[TaskAssignee] REMOVE';
    static REMOVE_SUCCESS = '[TaskAssignee] REMOVE_SUCCESS';

    LoadAll(): Action {
        return { type: TaskAssigneeActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: ITaskAssignee[]): IActionWithPayload {
        return { type: TaskAssigneeActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: TaskAssigneeActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.LOAD_ONE_SUCCESS, payload };
    }

    Add(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.ADD, payload };
    }

    AddSuccess(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.ADD_SUCCESS, payload };
    }

    Update(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.UPDATE, payload };
    }

    UpdateSuccess(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.UPDATE_SUCCESS, payload };
    }

    Patch(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.PATCH, payload };
    }

    PatchSuccess(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.PATCH_SUCCESS, payload };
    }

    Remove(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.REMOVE, payload };
    }

    RemoveSuccess(payload: ITaskAssignee): IActionWithPayload {
        return { type: TaskAssigneeActions.REMOVE_SUCCESS, payload };
    }
}
