import * as _ from 'lodash';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../state/state';
import { ITask } from '../state/reducers/task';
import { Observable } from 'rxjs';
import { getTaskCollectionById } from './../state/selectors/task';

@Component({
    selector: 'task-card, [task-card]',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent implements OnChanges {
    @Input() id: number;

    task$: Observable<ITask>;

    constructor(private store: Store<AppState>) {}

    ngOnChanges(changes: SimpleChanges) {
        if (_.has(changes, 'id.currentValue')) {
            this.task$ = this.store.pipe(select(getTaskCollectionById(this.id)));
        }
    }
}
