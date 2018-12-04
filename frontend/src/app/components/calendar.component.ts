import { Calendar, Draggable } from 'fullcalendar';
import EventApi from 'fullcalendar/EventApi';

import {
    AfterViewChecked, Component, DoCheck, ElementRef, EventEmitter, HostListener, Input,
    IterableDiffers, OnChanges, OnDestroy, OnInit, Output, SimpleChanges
} from '@angular/core';

export interface ViewSkeletonRenderInfo {
    view: any;
    el: HTMLElement;
}

export interface DatesRenderInfo {
    view: any;
    el: HTMLElement;
}

export interface EventRenderInfo {
    event: EventObject;
    el: HTMLElement;
    isMirror: boolean;
    isStart: boolean;
    isEnd: boolean;
    view: any;
}

export interface DropInfo {
    date: Date;
    draggedEl: HTMLElement;
    jsEvent: Event;
    view: any;
    allDay: boolean;
}

export interface EventDropInfo {
    event: EventApi;
    prevEvent: EventApi;
    el: HTMLElement;
    delta: any;
    revert: Function;
    jsEvent: Event;
    view: any
}

export interface EventResizeInfo {
    event: EventApi;
    prevEvent: EventApi;
    el: HTMLElement;
    startDelta: any;
    endDelta: any;
    revert: Function;
    jsEvent: Event;
    view: any
}

export interface EventClickInfo {
    event: EventApi;
    el: HTMLElement;
    jsEvent: Event;
    view: any
}

export interface EventObject {
    id?: string;
    groupId?: string;
    allDay?: boolean;
    start: Date;
    end?: Date;
    title: string;
    url?: string;
    classNames?: string[];
    editable?: boolean;
    startEditable?: boolean;
    durationEditable?: boolean;
    resourceEditable?: boolean;
    rendering?: '' | 'background' | 'inverse-background';
    overlap?: boolean | Function;
    constraint?: any;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    extendedProps?: any;
    source?: any;
}

export interface CalendarOptions {
    header?: any;
    isRTL?: boolean;
    weekends?: boolean;
    hiddenDays?: number[];
    firstDay?: number;
    fixedWeekCount?: boolean;
    weekNumbers?: boolean;
    businessHours?: any;
    height?: any;
    contentHeight?: any;
    aspectRatio?: number;
    eventLimit?: any;
    defaultDate?: any;
    locale?: string;
    timezone?: boolean | string;
    timeFormat?: string | null;
    editable?: boolean;
    droppable?: boolean;
    eventStartEditable?: boolean;
    eventDurationEditable?: boolean;
    defaultView?: string;
    allDaySlot?: boolean;
    allDayText?: string;
    slotDuration?: any;
    slotLabelInterval?: any;
    snapDuration?: any;
    defaultTimedEventDuration?: any;
    scrollTime?: any;
    minTime?: any;
    maxTime?: any;
    slotEventOverlap?: boolean;
    nowIndicator?: boolean;
    dragRevertDuration?: number;
    dragOpacity?: number;
    dragScroll?: boolean;
    eventOverlap?: any;
    eventConstraint?: any;
    dayRender?: Function;
    navLinks?: boolean;
}

const defaultConfig: CalendarOptions = {
    aspectRatio: 1.35,
    defaultView: 'month',
    slotDuration: '00:30:00',
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    slotEventOverlap: true,
    dragRevertDuration: 500,
    dragOpacity: .75,
    dragScroll: true,
    timezone: false,
    timeFormat: null
};
  
@Component({
    selector: 'calendar, [calendar]',
    template: ``
})
export class CalendarComponent implements OnInit, OnDestroy, AfterViewChecked, DoCheck, OnChanges {

    @Input() externalEventsWrapperId: string = 'fc-event-wrapper';
    @Input() externalEventItemClass: string = '.fc-event';
    @Input() options: CalendarOptions;
    @Input() events: EventObject[];
    @Input() header: any;
    @Input() isRTL: boolean;
    @Input() weekends: boolean;
    @Input() hiddenDays: number[];
    @Input() fixedWeekCount: boolean;
    @Input() weekNumbers: boolean;
    @Input() businessHours: any;
    @Input() height: any;
    @Input() contentHeight: any;
    @Input() aspectRatio: number;
    @Input() eventLimit: any;
    @Input() defaultDate: any;
    @Input() editable: boolean;
    @Input() droppable: boolean;
    @Input() eventStartEditable: boolean;
    @Input() eventDurationEditable: boolean;
    @Input() defaultView: string;
    @Input() allDaySlot: boolean;
    @Input() allDayText: string;
    @Input() slotDuration: any;
    @Input() slotLabelInterval: any;
    @Input() snapDuration: any;
    @Input() scrollTime: any;
    @Input() minTime: any;
    @Input() maxTime: any;
    @Input() slotEventOverlap: boolean;
    @Input() nowIndicator: boolean;
    @Input() dragRevertDuration: number;
    @Input() dragOpacity: number;
    @Input() dragScroll: boolean;
    @Input() eventOverlap: any;
    @Input() eventConstraint: any;
    @Input() locale: string;
    @Input() timezone: boolean | string;
    @Input() timeFormat: string | null;
    @Input() dayRender: Function;
    @Input() navLinks: boolean;
  
    // tslint:disable:no-output-on-prefix
    @Output() onViewSkeletonRender: EventEmitter<ViewSkeletonRenderInfo> = new EventEmitter<ViewSkeletonRenderInfo>();
    @Output() onDatesRender: EventEmitter<DatesRenderInfo> = new EventEmitter<DatesRenderInfo>();
    @Output() onEventRender: EventEmitter<EventRenderInfo> = new EventEmitter<EventRenderInfo>();
    @Output() onDrop: EventEmitter<DropInfo> = new EventEmitter<DropInfo>();
    @Output() onEventDrop: EventEmitter<EventDropInfo> = new EventEmitter<EventDropInfo>();
    @Output() onEventClick: EventEmitter<EventClickInfo> = new EventEmitter<EventClickInfo>();
    @Output() onEventResize: EventEmitter<EventResizeInfo> = new EventEmitter<EventResizeInfo>();
    @Output() onWindowResize: EventEmitter<any> = new EventEmitter<any>();
    // tslint:enable:no-output-on-prefix
  
    calendar: any;
    initialized: boolean;
    eventDiffer: any;
    config: any;
    copyableDraggable: Draggable;
  
    constructor(private el: ElementRef, differs: IterableDiffers) {
        this.eventDiffer = differs.find([]).create(null);
        this.initialized = false;
    }
  
    ngOnInit() {
        this.config = this.safeGenerateConfig();

        this.config.viewSkeletonRender = (info: ViewSkeletonRenderInfo) => {
            this.onViewSkeletonRender.emit(info);
        };

        this.config.datesRender = (info: DatesRenderInfo) => {
            this.onDatesRender.emit(info);
        };

        this.config.eventRender = (info: EventRenderInfo) => {
            this.onEventRender.emit(info);
        };

        this.config.drop = (info: DropInfo) => {
            this.onDrop.emit(info);
        };

        this.config.eventDrop = (info: EventDropInfo) => {
            this.onEventDrop.emit(info);
        };

        this.config.eventResize = (info: EventResizeInfo) => {
            this.onEventResize.emit(info);
        };
        
        this.config.eventClick = (info: EventClickInfo) => {
            this.onEventClick.emit(info);
        };
        
        this.config.windowResize = (info: any) => {
            this.onWindowResize.emit(info);
        };
    }
  
    ngOnDestroy() {
        if (this.calendar) {
            this.calendar.destroy();
            this.initialized = false;
            this.calendar = null;
        }
    }
  
    ngOnChanges(changes: SimpleChanges) {
        if (this.calendar) {
            for (const propName in changes) {
                if (propName !== 'events') {
                    this.calendar.setOption(propName, changes[propName].currentValue);
                }
            }
        }
    }
  
    ngAfterViewChecked() {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    }
  
    ngDoCheck() {
        const eventChanges = this.eventDiffer.diff(this.events);
        if (this.calendar && eventChanges) {
            this.setEvents();
        }
    }
  
    private initialize() {
        this.calendar = new Calendar(this.el.nativeElement, this.config);

        const externalEventsEl = document.getElementById(this.externalEventsWrapperId);

        new Draggable(externalEventsEl, {
            itemSelector: this.externalEventItemClass
        });

        this.calendar.render();

        // this will redraw the size of the calender
        // fixes an issue where the height: 'parent' option
        // is not doing as expected
        setTimeout(() => this.calendar.updateSize(), 0);

        this.setEvents();
        
        this.initialized = true;
    }
    
    private setEvents() {
        this.calendar.removeAllEventSources();
        if (this.events) {
            let source = {
                events: this.events,
                startEditable: this.eventStartEditable,
                durationEditable: this.eventDurationEditable
            }
            this.calendar.addEventSource(source);
        }
    }

    private safeGenerateConfig() {
        const configFromAttrs = {
            // tslint:disable:no-non-null-assertion
            header: this.header!,
            isRTL: this.isRTL!,
            weekends: this.weekends!,
            hiddenDays: this.hiddenDays!,
            fixedWeekCount: this.fixedWeekCount!,
            weekNumbers: this.weekNumbers!,
            businessHours: this.businessHours!,
            height: this.height!,
            contentHeight: this.contentHeight!,
            aspectRatio: this.aspectRatio!,
            eventLimit: this.eventLimit!,
            defaultDate: this.defaultDate!,
            locale: this.locale!,
            timezone: this.timezone!,
            timeFormat: this.timeFormat!,
            editable: this.editable!,
            droppable: this.droppable!,
            eventStartEditable: this.eventStartEditable!,
            eventDurationEditable: this.eventDurationEditable!,
            defaultView: this.defaultView!,
            allDaySlot: this.allDaySlot!,
            allDayText: this.allDayText!,
            slotDuration: this.slotDuration!,
            slotLabelInterval: this.slotLabelInterval!,
            snapDuration: this.snapDuration!,
            scrollTime: this.scrollTime!,
            minTime: this.minTime!,
            maxTime: this.maxTime!,
            slotEventOverlap: this.slotEventOverlap!,
            nowIndicator: this.nowIndicator!,
            dragRevertDuration: this.dragRevertDuration!,
            dragOpacity: this.dragOpacity!,
            dragScroll: this.dragScroll!,
            eventOverlap: this.eventOverlap!,
            eventConstraint: this.eventConstraint!,
            dayRender: this.dayRender!,
            navLinks: this.navLinks!,
            // tslint:enable:no-non-null-assertion
        };
    
        return {
            ...defaultConfig,
            ...this.removeUndefinedProperties(this.options),
            ...this.removeUndefinedProperties(configFromAttrs)
        };
    }
  
    removeUndefinedProperties<T>(object: Object): T {
        return JSON.parse(JSON.stringify(typeof object === 'object' ? object : {}));
    }

    @HostListener('document:keydown.alt', ['$event'])
    enableCopy(event: KeyboardEvent) {
        this.eventStartEditable = false;
        this.eventDurationEditable = false;
        this.setEvents();

        if (this.copyableDraggable) {
            this.copyableDraggable.destroy();
        }
        
        this.copyableDraggable = new Draggable(this.el.nativeElement, {
            itemSelector: '.fc-event'
        });
    }

    @HostListener('document:keyup.alt', ['$event'])
    disableCopy(event: KeyboardEvent) {
        this.eventStartEditable = true;
        this.eventDurationEditable = true;
        this.setEvents();

        if (this.copyableDraggable) {
            this.copyableDraggable.destroy();
        }
    }
}
