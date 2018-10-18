import { IClient } from './client';
import { reduceState } from '../generics';

export interface IJob {
    id?: number;
    title: string;
    description?: string;
    created_at?: string;
    client: number;
    type: number;
    estimated_hours?: string;
    colour: string;
    status: number;
    billed_to?: string;
    allocated_hours?: string;
    time_spent_hours?: string;
    _client?: IClient;
}

export type State = IJob[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[Job]';
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

        case `${actionPrefix} REMOVE_SUCCESS`: {
            return reduceState(state, action, 'REMOVE_ONE');
        }

        default:
            return state;
    }
}
