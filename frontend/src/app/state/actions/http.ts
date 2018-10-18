import { HttpErrorResponse } from '@angular/common/http';
import { IActionWithPayload } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpActions {

    static HTTP_ERROR = '[Http] HTTP_ERROR';

    HttpError(payload: HttpErrorResponse): IActionWithPayload {
        return { type: HttpActions.HTTP_ERROR, payload };
    }

}
