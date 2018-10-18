import * as fromClient from './reducers/client';
import * as fromFilter from './reducers/filter';
import * as fromJob from './reducers/job';
import * as fromMe from './reducers/me';
import * as fromTask from './reducers/task';
import * as fromTaskAssignee from './reducers/taskassignee';
import * as fromTaskNote from './reducers/tasknote';
import * as fromTaskStatus from './reducers/taskstatus';
import * as fromUser from './reducers/user';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface AppState {
    clients: fromClient.State;
    filters: fromFilter.State;
    jobs: fromJob.State;
    me: fromMe.State;
    tasks: fromTask.State;
    task_assignees: fromTaskAssignee.State;
    task_notes: fromTaskNote.State;
    task_statuses: fromTaskStatus.State;
    users: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
    clients: fromClient.reducer,
    filters: fromFilter.reducer,
    jobs: fromJob.reducer,
    me: fromMe.reducer,
    tasks: fromTask.reducer,
    task_assignees: fromTaskAssignee.reducer,
    task_notes: fromTaskNote.reducer,
    task_statuses: fromTaskStatus.reducer,
    users: fromUser.reducer
};

export const getClientState = createFeatureSelector<fromClient.State>('clients');
export const getFilterState = createFeatureSelector<fromFilter.State>('filters');
export const getJobState = createFeatureSelector<fromJob.State>('jobs');
export const getMeState = createFeatureSelector<fromMe.State>('me');
export const getTaskState = createFeatureSelector<fromTask.State>('tasks');
export const getTaskAssigneeState = createFeatureSelector<fromTaskAssignee.State>('task_assignees');
export const getTaskNoteState = createFeatureSelector<fromTaskNote.State>('task_notes');
export const getTaskStatusState = createFeatureSelector<fromTaskStatus.State>('task_statuses');
export const getUserState = createFeatureSelector<fromUser.State>('users');
