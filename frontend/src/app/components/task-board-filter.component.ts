import * as actions from '../state/actions';

import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getClientState, getFilterState, getMeState, getUserState } from './../state/state';

import { AppState } from '../state/state';
import { IClient } from './../state/reducers/client';
import { IFilter } from './../state/reducers/filter';
import { IJob } from './../state/reducers/job';
import { IUser } from './../state/reducers/user';
import { Observable } from 'rxjs';
import { getJobCollection } from '../state/selectors/job';

@Component({
    selector: 'task-board-filter, [task-board-filter]',
    templateUrl: './task-board-filter.component.html'
})
export class TaskboardFilterComponent {
    
    @Input() client: number = null;
    @Input() job: number = null;
    @Input() user: number = null;
    
    users$: Observable<IUser[]>;
    clients$: Observable<IClient[]>;
    jobs$: Observable<IJob[]>;
    
    filters: IFilter;
    open: false;
    
    constructor(private store: Store<AppState>) {
        this.clients$ = store.pipe(select(getClientState));
        this.jobs$ = store.pipe(select(getJobCollection));
        this.users$ = store.pipe(select(getUserState));
        this.store.pipe(select(getMeState)).subscribe(m => this.onUserChange(m.id));
        this.store.pipe(select(getFilterState)).subscribe(f => this.filters = f);
    }
    
    onClientChange(id: number) {
        console.log(id);
        this.store.dispatch({ type: actions.FilterActions.CLIENT, payload: id });
        this.store.dispatch({ type: actions.FilterActions.JOB, payload: null });
    }

    onJobChange(id: number) {
        this.store.dispatch({ type: actions.FilterActions.JOB, payload: id });
    }

    onOverdueChange(value: boolean) {
        this.store.dispatch({ type: actions.FilterActions.OVERDUE, payload: value });
    }

    onUserChange(id: number) {
        this.store.dispatch({ type: actions.FilterActions.USER, payload: id });
    }
}
