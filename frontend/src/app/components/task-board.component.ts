import * as _ from 'lodash';
import * as actions from '../state/actions';

import { Store, select } from '@ngrx/store';
import { getStatsForTaskboard, getTaskAssigneesForTaskboard } from './../state/selectors/taskboard';

import { AppState } from '../state/state';
import { Component } from '@angular/core';
import { ITaskStatus } from '../state/reducers/taskstatus';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'task-board, [task-board]',
    templateUrl: './task-board.component.html',
    host: {'class': 'd-flex flex-fill flex-column'}
})
export class TaskboardComponent {
    createFormOpen = false;
    createFormStatusId: number;
    selectedTaskId: number;
    taskAssigneesForTaskboard$: Observable<any[]>;
    statsForTaskboard$: Observable<any>;

    constructor(private store: Store<AppState>) {
        this.taskAssigneesForTaskboard$ = store.pipe(select(getTaskAssigneesForTaskboard), debounceTime(100));
        this.statsForTaskboard$ = store.pipe(select(getStatsForTaskboard), debounceTime(100));
    }

    droppedIntoColumn(status: any, assignees: any) {
        _.each(assignees, (assignee, i) => {
            if (assignee._task.status != status.id) {
                const payload = {id: assignee.task, status: status.id};
                this.store.dispatch({type: actions.TaskActions.PATCH, payload})
            }
            const order = i+1;
            if (assignee.order != order) {
                const payload = {id: assignee.id, order: order};
                this.store.dispatch({type: actions.TaskAssigneeActions.PATCH, payload});
            }
        });
    }

    openCreateForm(status: ITaskStatus) {
        this.createFormStatusId = status.id;
        this.createFormOpen = true;
    }
}
