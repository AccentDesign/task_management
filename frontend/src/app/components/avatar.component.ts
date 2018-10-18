import * as _ from 'lodash';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../state/state';
import { IUser } from '../state/reducers/user';
import { Observable } from 'rxjs';
import { getUserById } from '../state/selectors/user';

@Component({
    selector: '[avatar]',
    templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnChanges {
    @Input() id: number;

    user: Observable<IUser>;

    constructor(private store: Store<AppState>) {}

    ngOnChanges(changes: SimpleChanges) {
        if (_.has(changes, 'id.currentValue')) {
            this.user = this.store.pipe(select(getUserById(this.id)));
        }
    }
}

