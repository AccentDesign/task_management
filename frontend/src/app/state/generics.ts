import * as _ from 'lodash';

import { IActionWithPayload } from './models';

export function reduceState (state: any, action: IActionWithPayload, type: string) {
    switch (type) {
        case 'REPLACE_ALL':
            return action.payload;

        case 'REPLACE_ONE':
            const index = _.findIndex(state, { id: action.payload.id });
            if (index >= 0) {
                // only replace the data if its not the same to avoid a state change
                if (_.isEqual(state[index], action.payload)) {
                    return state;
                } else {
                    return [
                        ...state.slice(0, index),
                        action.payload,
                        ...state.slice(index + 1)
                    ];
                }
            }
            return [...state, action.payload];

        case 'ADD_ONE':
            return [...state, action.payload];

        case 'REMOVE_ONE':
            return _.filter(state, (obj: any) => obj.id !== action.payload.id);

        default:
            return state;
    }
}
