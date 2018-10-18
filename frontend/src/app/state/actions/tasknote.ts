import { Action } from '@ngrx/store';
import { IActionWithPayload } from '../models';
import { ITaskNote } from '../reducers/tasknote';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskNoteActions {

    static LOAD_ALL = '[TaskNote] LOAD_ALL';
    static LOAD_ALL_SUCCESS = '[TaskNote] LOAD_ALL_SUCCESS';
    static LOAD_ONE = '[TaskNote] LOAD_ONE';
    static LOAD_ONE_SUCCESS = '[TaskNote] LOAD_ONE_SUCCESS';
    static ADD = '[TaskNote] ADD';
    static ADD_SUCCESS = '[TaskNote] ADD_SUCCESS';
    static UPDATE = '[TaskNote] UPDATE';
    static UPDATE_SUCCESS = '[TaskNote] UPDATE_SUCCESS';
    static REMOVE = '[TaskNote] REMOVE';
    static REMOVE_SUCCESS = '[TaskNote] REMOVE_SUCCESS';

    LoadAll(): Action {
        return { type: TaskNoteActions.LOAD_ALL };
    }

    LoadAllSuccess(payload: ITaskNote[]): IActionWithPayload {
        return { type: TaskNoteActions.LOAD_ALL_SUCCESS, payload };
    }

    LoadOne(payload: number): IActionWithPayload {
        return { type: TaskNoteActions.LOAD_ONE, payload };
    }

    LoadOneSuccess(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.LOAD_ONE_SUCCESS, payload };
    }

    Add(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.ADD, payload };
    }

    AddSuccess(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.ADD_SUCCESS, payload };
    }

    Update(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.UPDATE, payload };
    }

    UpdateSuccess(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.UPDATE_SUCCESS, payload };
    }

    Remove(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.REMOVE, payload };
    }

    RemoveSuccess(payload: ITaskNote): IActionWithPayload {
        return { type: TaskNoteActions.REMOVE_SUCCESS, payload };
    }
}
