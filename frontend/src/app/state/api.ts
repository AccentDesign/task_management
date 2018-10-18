import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { APIService } from '../services/api';
import { HttpActions } from './actions';
import { IActionWithPayload } from './models';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class APIBaseEffects {

    protected url = '';

    get apiUrl() {
        return this.url;
    }

    protected _all$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        mergeMap(action =>
            this.service$.all(this.apiUrl).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    protected _one$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        map((action: IActionWithPayload) => action.payload),
        mergeMap(id =>
            this.service$.one(this.apiUrl, id).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    protected _add$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        map((action: IActionWithPayload) => action.payload),
        mergeMap(obj =>
            this.service$.create(this.apiUrl, obj).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    protected _update$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        map((action: IActionWithPayload) => action.payload),
        mergeMap(obj =>
            this.service$.update(this.apiUrl, obj).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    protected _patch$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        map((action: IActionWithPayload) => action.payload),
        mergeMap(obj =>
            this.service$.patch(this.apiUrl, obj).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    protected _remove$ = (
        actionOfType: string, successOfType: string
    ) => this.updates$.pipe(
        ofType(actionOfType),
        map((action: IActionWithPayload) => action.payload),
        mergeMap(obj =>
            this.service$.remove(this.apiUrl, obj).pipe(
                map(data => ({type: successOfType, payload: data})),
                catchError(res => of({type: HttpActions.HTTP_ERROR, payload: res}))
            )
        )
    )

    constructor(
        protected updates$: Actions,
        protected service$: APIService) {
    }
}
