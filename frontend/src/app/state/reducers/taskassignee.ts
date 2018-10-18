import { reduceState } from '../generics';

export interface ITaskAssignee {
    id?: number;
    task: number;
    user: number;
    allocated_hours: string;
    order: number;
}

export type State = ITaskAssignee[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[TaskAssignee]';
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
