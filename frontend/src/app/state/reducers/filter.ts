import * as _ from 'lodash';

export interface IFilter {
    client: number;
    job: number;
    overdue: boolean;
    user: number;
}

export type State = IFilter;

export const initialState: State = {
    client: null,
    job: null,
    overdue: null,
    user: null
};

export function reducer(state = initialState, action: any): State {
    const actionPrefix = '[Filter]';
    
    switch (action.type) {

        case `${actionPrefix} CLIENT`: {
            return _.assign({}, state, { client: action.payload })
        }

        case `${actionPrefix} JOB`: {
            return _.assign({}, state, { job: action.payload })
        }

        case `${actionPrefix} OVERDUE`: {
            return _.assign({}, state, { overdue: action.payload })
        }

        case `${actionPrefix} USER`: {
            return _.assign({}, state, { user: action.payload })
        }

        default:
            return state;
    }
}
