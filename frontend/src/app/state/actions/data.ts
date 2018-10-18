import { IActionWithPayload } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataActions {

    static LOAD_DATA = '[Data] LOAD_DATA';

    LoadData(payload: boolean): IActionWithPayload {
        return { type: DataActions.LOAD_DATA, payload };
    }

}
