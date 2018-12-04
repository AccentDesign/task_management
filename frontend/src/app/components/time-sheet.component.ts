import * as actions from '../state/actions';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { AppState } from '../state/state';
import {
    CalendarOptions,
    DatesRenderInfo,
    DropInfo,
    EventClickInfo,
    EventDropInfo,
    EventObject,
    EventRenderInfo,
    EventResizeInfo,
    ViewSkeletonRenderInfo
    } from './calendar.component';
import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { getDatesBetween } from './../utils/generic';
import { getEventsForUser, getTasksForUser } from '../state/selectors/timesheet';
import { getMeState } from './../state/state';
import { IUser } from '../state/reducers/user';
import { Observable, Subscription } from 'rxjs';
import { getActiveUsers } from '../state/selectors/user';

@Component({
    selector: 'time-sheet, [time-sheet]',
    templateUrl: './time-sheet.component.html',
    host: {'class': 'd-flex flex-fill flex-column'}
})
export class TimesheetComponent implements OnInit {

    events$: Observable<EventObject[]>;
    currentUpdateRequest: Subscription;
    options: CalendarOptions;
    searchTerms: string[] = [];
    selectedEventId: number;
    selectedTaskId: number;
    selectedUserId: number;
    slotDuration: number = 5;
    formattedSlotDuration: string = '00:05:00';
    subscriptions: Subscription[] = [];
    tasks$: Observable<any>;
    users$: Observable<IUser[]>;
    viewAxisWidth: number;
    viewDates: any[] = [];

    constructor(
        private store: Store<AppState>,
        private actionsSubject: ActionsSubject
    ) { }
    
    ngOnInit() {
        this.users$ = this.store.pipe(select(getActiveUsers));
        this.store.pipe(select(getMeState)).subscribe(me => {
            this.selectedUserId = me.id;
            this.refetchEvents();
            this.refetchTasks();
        });

        this.options = {
            defaultView: 'agendaWeek',
            header: {
                left: 'agendaDay,agendaWeek',
                center: 'title',
                right:  'today prev,next'
            },
            height: 'parent',
            firstDay: 1,
            allDaySlot: false,
            nowIndicator: true,
            slotEventOverlap: false,
            slotDuration: '00:05:00',
            snapDuration: '00:01:00',
            defaultTimedEventDuration: '00:05:00',
            scrollTime: moment().format('HH:00:00'),
            editable: true,
            dragRevertDuration: 0,
            droppable: true,
            eventOverlap: false
        };
    }

    refetchTasks() {
        this.tasks$ = this.store.pipe(select(getTasksForUser(this.selectedUserId, this.searchTerms)));
    }

    refetchEvents() {
        this.events$ = this.store.pipe(select(getEventsForUser(this.selectedUserId)));
    }

    changeTask(task: number) {
        if (this.selectedEventId) {
            this.selectedTaskId = task;
        }
    }

    onViewSkeletonRender(info: ViewSkeletonRenderInfo) {
        setTimeout(() => {
            this.viewAxisWidth = info.view.axisWidth + 10;
        });
    }

    onWindowResize(info: any) {
        setTimeout(() => {
            this.viewAxisWidth = info.axisWidth + 10;
        });
    }

    onDatesRender(info: DatesRenderInfo) {
        setTimeout(() => {
            this.viewDates = getDatesBetween(info.view.activeStart, moment(info.view.activeEnd).add(-1, "days").toDate())
        });
    }

    onEventRender(info: EventRenderInfo) {
        if (info.event.extendedProps.signed_off) {
            info.el.style.opacity = '.5';
        }
    }

    onDrop(info: DropInfo) {
        const props = _.get(info.draggedEl, 'fcSeg.eventRange.def.extendedProps') || _.get(info.draggedEl, 'dataset');
        const payload: any = {
            user: this.selectedUserId,
            task: props.task,
            started_at: moment(info.date).toISOString(),
            ended_at: moment(info.date).add(5, 'minutes').toISOString(),
            signed_off: false
        }
        this.store.dispatch({type: actions.TimeEntryActions.ADD, payload});
    }

    onEventDrop(info: EventDropInfo) {
        const payload: any = {
            id: info.event.extendedProps.id,
            started_at: moment(info.event.start).toISOString(),
            ended_at: moment(info.event.end).toISOString(),
            signed_off: false
        }
        this.updateEvent(info, payload);
    }

    onEventResize(info: EventResizeInfo) {
        const payload: any = {
            id: info.event.extendedProps.id,
            started_at: moment(info.event.start).toISOString(),
            ended_at: moment(info.event.end).toISOString(),
            signed_off: false
        }
        this.updateEvent(info, payload);
    }

    onEventClick(info: EventClickInfo) {
        this.selectedEventId = info.event.extendedProps.id;
    }

    onChangeSlotDuration(event: any) {
        const duration = moment.utc(moment.duration(event, 'minutes').as('milliseconds')).format('HH:mm:ss');
        this.formattedSlotDuration = duration;
    }

    private updateEvent(info: any, payload: any) {
        // if there is a current subscription stop it
        if (this.currentUpdateRequest) { this.currentUpdateRequest.unsubscribe(); }
        // update the entry
        this.store.dispatch({type: actions.TimeEntryActions.PATCH, payload});
        // if there is an http error revert it
        this.currentUpdateRequest = this.actionsSubject.pipe(
            filter((a: any) => a.type === actions.HttpActions.HTTP_ERROR && a.payload.data.id === payload.id),
            take(1)
        ).subscribe(
            () => info.revert()
        );
    }
}
