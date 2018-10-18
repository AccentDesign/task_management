import * as _ from 'lodash'

import { getFilterState, getTaskStatusState } from './../state';
import { getTaskAssigneeCollection, getTaskCollection } from './task';

import { createSelector } from '@ngrx/store';

export const getTaskAssigneesForTaskboard = createSelector(
    getFilterState,
    getTaskStatusState,
    getTaskAssigneeCollection,
    (filters, statuses, assignees) => _.map(statuses, status => {
        let foundAssignees = _.filter(assignees, ['_task.status', status.id]);
        if (filters.user) {
            foundAssignees = _.filter(foundAssignees, ['user', filters.user])
        }
        if (filters.client) {
            foundAssignees = _.filter(foundAssignees, ['_task._job.client', filters.client])
        }
        if (filters.job) {
            foundAssignees = _.filter(foundAssignees, ['_task.job', filters.job])
        }
        if (filters.overdue === true) {
            foundAssignees = _.filter(foundAssignees, ['_task.is_overdue', filters.overdue])
        }
        return _.assign({}, status, {
            _assignees: foundAssignees
        });
    })
);

export const getStatsForTaskboard = createSelector(
    getFilterState,
    getTaskCollection,
    (filters, tasks) => {
        let foundTasks = tasks;
        if (filters.user) {
            foundTasks = _.filter(foundTasks, { _assignees: [{'user': filters.user}] })
        }
        if (filters.client) {
            foundTasks = _.filter(foundTasks, ['_job.client', filters.client])
        }
        if (filters.job) {
            foundTasks = _.filter(foundTasks, ['job', filters.job])
        }
        if (filters.overdue === true) {
            foundTasks = _.filter(foundTasks, ['is_overdue', filters.overdue])
        }
        return {
            count_of_tasks: foundTasks.length,
            allocated_hours: _.sumBy(foundTasks, t => +t.allocated_hours).toFixed(2),
            count_of_overdue: _.filter(foundTasks, t => t.is_overdue).length
        }
    }
);
