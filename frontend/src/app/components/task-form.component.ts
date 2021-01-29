import * as _ from 'lodash';
import * as actions from '../state/actions';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { AppState, getTaskStatusState } from '../state/state';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild
    } from '@angular/core';
import { DeletableService } from '../services/deletable';
import { DropzoneConfigInterface } from '../../../node_modules/ngx-dropzone-wrapper';
import { filter, take } from 'rxjs/operators';
import { FormCleanAfterMethod } from '../forms/base.form';
import { getActiveUsers } from '../state/selectors/user';
import { getCookie } from '../utils/cookies';
import { getTagCollection } from '../state/selectors/tag';
import {
    getTaskAssigneesForTask,
    getTaskCollectionById,
    getTaskFilesForTask,
    getTaskNotesForTask,
    getTaskTagsForTask,
    getTaskTimingsById
    } from './../state/selectors/task';
import { ITag } from '../state/reducers/tag';
import { ITask } from '../state/reducers/task';
import { ITaskAssignee } from '../state/reducers/taskassignee';
import { ITaskFile } from './../state/reducers/taskfile';
import { ITaskNote } from '../state/reducers/tasknote';
import { ITaskTag } from './../state/reducers/tasktag';
import { ITaskTiming } from '../state/reducers/tasktiming';
import { IUser } from '../state/reducers/user';
import { Observable } from 'rxjs';
import { TaskAssigneeForm } from '../forms/task-assignee.form';
import { TaskClosedForm } from '../forms/task-close.form';
import { TaskDescriptionForm } from '../forms/task-description.form';
import { TaskCurrentStatusForm } from '../forms/task-currentstatus.form';
import { TaskNotChargeableForm } from '../forms/task-not-chargeable.form';
import { TaskNoteForm } from '../forms/task-note.form';
import { TaskTagForm } from '../forms/task-tag.form';
import { TaskTargetDateForm } from '../forms/task-target-date.form';
import { TaskTitleForm } from '../forms/task-title.form';
import { TaskStatusForm } from '../forms/task-status.form';
import { ITaskStatus } from '../state/reducers/taskstatus';
import { IActionWithPayload } from '../state/models';

@Component({
    selector: 'task-form, [task-form]',
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnChanges {
    @Input() id: number;

    @Output() close = new EventEmitter();
    @Output() moveStatuses = new EventEmitter();

    @ViewChild('modalPanel') modalPanelRef: ElementRef;

    activeTab: string;
    assigneeEditForm: TaskAssigneeForm;
    canDelete: boolean = false;
    closedForm: TaskClosedForm;
    descriptionForm: TaskDescriptionForm;
    currentstatusForm: TaskCurrentStatusForm;
    dropzoneConfig: DropzoneConfigInterface = {
        url: '/api/task-files/',
        maxFilesize: 50,
        headers: { 'X-CSRFTOKEN': getCookie('csrftoken') }
    };
    newNoteForm: TaskNoteForm;
    notChargeableForm: TaskNotChargeableForm;
    statusForm: TaskStatusForm;
    tagEditForm: TaskTagForm;
    tags$: Observable<ITag[]>;
    targetDateForm: TaskTargetDateForm;
    task$: Observable<ITask>;
    taskAssignees$: Observable<ITaskAssignee[]>;
    taskFiles$: Observable<ITaskFile[]>;
    taskNotes$: Observable<ITaskNote[]>;
    taskStatuses$: Observable<ITaskStatus[]>;
    taskTags$: Observable<ITaskTag[]>;
    taskTiming$: Observable<ITaskTiming>;
    taskNoteForms = {};
    titleForm: TaskTitleForm;
    users$: Observable<IUser[]>;

    constructor(
        private store: Store<AppState>,
        private actionsSubject: ActionsSubject,
        private deletable: DeletableService
    ) {
        this.taskStatuses$ = this.store.pipe(select(getTaskStatusState));
        this.tags$ = this.store.pipe(select(getTagCollection));
        this.users$ = this.store.pipe(select(getActiveUsers));

        this.closedForm = new TaskClosedForm(this.store, this.actionsSubject, { alwaysEditable: true });
        this.descriptionForm = new TaskDescriptionForm(this.store, this.actionsSubject);
        this.currentstatusForm = new TaskCurrentStatusForm(this.store, this.actionsSubject);
        this.statusForm = new TaskStatusForm(this.store, this.actionsSubject);
        this.titleForm = new TaskTitleForm(this.store, this.actionsSubject);
        this.targetDateForm = new TaskTargetDateForm(this.store, this.actionsSubject);
        this.newNoteForm = new TaskNoteForm(this.store, this.actionsSubject);
        this.notChargeableForm = new TaskNotChargeableForm(this.store, this.actionsSubject, { alwaysEditable: true });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (_.has(changes, 'id.currentValue')) {
            this.activeTab = 'detail';
            this.taskFiles$ = this.store.pipe(select(getTaskFilesForTask(this.id)));
            this.task$ = this.store.pipe(select(getTaskCollectionById(this.id)));
            this.taskAssignees$ = this.store.pipe(select(getTaskAssigneesForTask(this.id)));
            this.taskNotes$ = this.store.pipe(select(getTaskNotesForTask(this.id)));
            this.taskTags$ = this.store.pipe(select(getTaskTagsForTask(this.id)));
            this.taskTiming$ = this.store.pipe(select(getTaskTimingsById(this.id)));
            this.task$.pipe(
                filter(d => _.isObject(d))
            ).subscribe(
                d => {
                    this.closedForm.load(d);
                    this.descriptionForm.load(d);
                    this.currentstatusForm.load(d);
                    this.newNoteForm.load({task: d.id});
                    this.notChargeableForm.load(d);
                    this.statusForm.load(d);
                    this.titleForm.load(d);
                    this.targetDateForm.load(d);
                }
            );
            this.deletable.check(DeletableService.TASK, this.id).then(check => this.canDelete = check);
        }
    }

    closeEvent(event) {
        if (this.modalPanelRef.nativeElement.contains(event.target)) {
            // inside modal - do not close
        } else {
            this.close.emit(event);
        }
    }

    // note

    getOrCreateEditNoteForm(note: ITaskNote) {
        if (!_.has(this.taskNoteForms, note.id)) {
            const form = new TaskNoteForm(
                this.store,
                this.actionsSubject,
                { cleanAfterMethod: FormCleanAfterMethod.loadSaved }
            );
            form.load(note);
            this.taskNoteForms[note.id] = form;
            return this.taskNoteForms[note.id];
        }
        return this.taskNoteForms[note.id];
    }

    // assignee

    editAssignee(assignee: ITaskAssignee) {
        this.assigneeEditForm = new TaskAssigneeForm(
            this.store,
            this.actionsSubject
        );
        this.assigneeEditForm.editable = true;
        this.assigneeEditForm.load(assignee);
    }

    // files
    
    onFileSending(event: any) {
        event[2].set('task', this.id);
    }

    onFileSuccess(event: any) {
        const payload = event[1];
        this.store.dispatch({type: actions.TaskFileActions.LOAD_ONE_SUCCESS, payload});
    }

    deleteFile(payload: ITaskFile) {
        this.store.dispatch({type: actions.TaskFileActions.REMOVE, payload});
    }

    downloadFile(payload: ITaskFile) {
        this.store.dispatch({type: actions.TaskFileActions.LOAD_ONE, payload: payload.id});
        this.actionsSubject.pipe(
            filter((action: IActionWithPayload) => action.type === actions.TaskFileActions.LOAD_ONE_SUCCESS),
            take(1)
        ).subscribe(action => window.open(action.payload.file, "_blank"));
    }

    // tags

    editTag(tag: ITaskTag) {
        this.tagEditForm = new TaskTagForm(
            this.store,
            this.actionsSubject
        );
        this.tagEditForm.editable = true;
        this.tagEditForm.load(tag);
    }

    // task

    delete(task: ITask) {
        this.store.dispatch({type: actions.TaskActions.REMOVE, payload: task});
    }

}
