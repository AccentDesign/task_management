import { ClientEffects } from './client';
import { DataEffects } from './data';
import { JobEffects } from './job';
import { MeEffects } from './me';
import { TaskAssigneeEffects } from './taskassignee';
import { TaskEffects } from './task';
import { TaskNoteEffects } from './tasknote';
import { TaskStatusEffects } from './taskstatus';
import { UserEffects } from './user';

export const effects = [
    ClientEffects,
    DataEffects,
    JobEffects,
    MeEffects,
    TaskEffects,
    TaskAssigneeEffects,
    TaskNoteEffects,
    TaskStatusEffects,
    UserEffects
];
