import { Action } from '@ngrx/store';

export interface IActionWithPayload extends Action {
    payload?: any;
}
