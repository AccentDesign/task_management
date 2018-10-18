import { reduceState } from '../generics';

export interface IUser {
    id: number;
    full_name: string;
    initials: string;
}

export type State = IUser[];

export const initialState: State = [];

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[User]';
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
