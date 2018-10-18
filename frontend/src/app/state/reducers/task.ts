import { IJob } from './job';
import { ITaskAssignee } from './taskassignee';
import { ITaskNote } from './tasknote';
import { ITaskStatus } from './taskstatus';
import { reduceState } from '../generics';

export interface ITask {
    id?: number;
    title: string;
    description?: string;
    created_at?: string;
    job: number;
    status: number;
    target_date?: string;
    closed?: boolean;
    not_chargeable?: boolean;
    time_spent_hours?: string;
    allocated_hours?: string;
    is_overdue?: boolean;
    order: number;
    tags: string[];
    _job?: IJob;
    _assignees?: ITaskAssignee[];
    _notes?: ITaskNote[];
    _status?: ITaskStatus[];
}

export type State = ITask[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[Task]';
    switch (action.type) {

        // Replace all objects
        case `${actionPrefix} LOAD_ALL_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ALL');
        }

        // Basic CRUD actions
        case `${actionPrefix} LOAD_ONE_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ONE');
        }

        case `${actionPrefix} ADD_SUCCESS`: {
            return reduceState(state, action, 'ADD_ONE');
        }

        case `${actionPrefix} UPDATE_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ONE');
        }

        case `${actionPrefix} PATCH_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ONE');
        }

        case `${actionPrefix} REMOVE_SUCCESS`: {
            return reduceState(state, action, 'REMOVE_ONE');
        }

        default:
            return state;
    }
}
