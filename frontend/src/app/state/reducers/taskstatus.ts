import { reduceState } from '../generics';

export interface ITaskStatus {
    id: number;
    title: string;
    order: number;
}

export type State = ITaskStatus[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[TaskStatus]';
    switch (action.type) {

        // Replace all objects
        case `${actionPrefix} LOAD_ALL_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ALL');
        }

        // Basic CRUD actions
        case `${actionPrefix} LOAD_ONE_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ONE');
        }

        default:
            return state;
    }
}
