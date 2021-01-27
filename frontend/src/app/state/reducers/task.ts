import { IJob } from './job';
import { IUser } from './user';
import { ITaskStatus } from './taskstatus';
import { reduceState } from '../generics';
import { ITaskAssignee } from './taskassignee';

export interface ITask {
    id?: number;
    title: string;
    description?: string;
    current_status?: string;
    created_at?: string;
    created_by?: number;
    job: number;
    status: number;
    target_date?: string;
    closed?: boolean;
    not_chargeable?: boolean;
    is_overdue?: boolean;
    order: number;
    tags: string[];
    _assignees?: ITaskAssignee[]; 
    _job?: IJob;
    _status?: ITaskStatus;
    _user?: IUser;
}

export type State = ITask[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[Task]';
    switch (action.type) {

        // Replace objects
        case `${actionPrefix} LOAD_ALL_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ALL');
        }

        case `${actionPrefix} REPLACE_MANY`: {
            return reduceState(state, action, 'REPLACE_MANY');
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
