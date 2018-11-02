import { reduceState } from '../generics';

export interface IMe {
    id: number;
    full_name: string;
    initials: string;
    is_gradwell_enabled: boolean;
}

export type State = IMe;

export const initialState: State = {
    id: null,
    full_name: '',
    initials: '',
    is_gradwell_enabled: false
};

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[Me]';
    switch (action.type) {

        // primarily used when state is a single object
        case `${actionPrefix} LOAD_SUCCESS`: {
            return reduceState(state, action, 'REPLACE_ALL');
        }

        default:
            return state;
    }
}
