import { IActionWithPayload } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FilterActions {

    static CLIENT = '[Filter] CLIENT';
    static JOB = '[Filter] JOB';
    static OVERDUE = '[Filter] OVERDUE';
    static USER = '[Filter] USER';

    Client(payload: number): IActionWithPayload {
        return { type: FilterActions.CLIENT, payload };
    }

    Job(payload: number): IActionWithPayload {
        return { type: FilterActions.JOB, payload };
    }

    Overdue(payload: number): IActionWithPayload {
        return { type: FilterActions.OVERDUE, payload };
    }

    User(payload: number): IActionWithPayload {
        return { type: FilterActions.USER, payload };
    }
}
