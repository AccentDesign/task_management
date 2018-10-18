import * as _ from 'lodash';

import { getClientState, getJobState } from '../state';

import { createSelector } from '@ngrx/store';

export const getJobCollection = createSelector(
    getClientState,
    getJobState,
    (clients, jobs) => {
        const objects = _.map(jobs, (job) => {
            return _.assign({}, job, {
                _client: _.find(clients, ['id', job.client])
            });
        });
        return _.orderBy(objects, ['title'], ['asc']);
    }
);
