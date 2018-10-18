import * as _ from 'lodash';

import { createSelector } from '@ngrx/store';
import { getUserState } from '../state';

export const getUserById = (id) => createSelector(
  getUserState,
  (users) => _.find(users, ['id', id])
);
