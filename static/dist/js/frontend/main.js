(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<task-board></task-board>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            host: { 'class': 'd-flex flex-fill flex-column' }
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/state */ "./src/app/state/state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directives_auto_resize_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/auto-resize.directive */ "./src/app/directives/auto-resize.directive.ts");
/* harmony import */ var _components_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/avatar.component */ "./src/app/components/avatar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/fesm5/swimlane-ngx-dnd.js");
/* harmony import */ var _components_task_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/task-card.component */ "./src/app/components/task-card.component.ts");
/* harmony import */ var _components_task_create_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/task-create-form.component */ "./src/app/components/task-create-form.component.ts");
/* harmony import */ var _components_task_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-form.component */ "./src/app/components/task-form.component.ts");
/* harmony import */ var _components_task_board_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/task-board.component */ "./src/app/components/task-board.component.ts");
/* harmony import */ var _components_task_board_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/task-board-filter.component */ "./src/app/components/task-board-filter.component.ts");
/* harmony import */ var _state_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/effects */ "./src/app/state/effects/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = /** @class */ (function () {
    function AppModule(store) {
        this.store = store;
        store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["DataActions"].LOAD_DATA });
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives_auto_resize_directive__WEBPACK_IMPORTED_MODULE_6__["AutoResizeDirective"],
                _components_avatar_component__WEBPACK_IMPORTED_MODULE_7__["AvatarComponent"],
                _components_task_board_component__WEBPACK_IMPORTED_MODULE_15__["TaskboardComponent"],
                _components_task_board_filter_component__WEBPACK_IMPORTED_MODULE_16__["TaskboardFilterComponent"],
                _components_task_card_component__WEBPACK_IMPORTED_MODULE_12__["TaskCardComponent"],
                _components_task_create_form_component__WEBPACK_IMPORTED_MODULE_13__["TaskCreateFormComponent"],
                _components_task_form_component__WEBPACK_IMPORTED_MODULE_14__["TaskFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot(_state_effects__WEBPACK_IMPORTED_MODULE_17__["effects"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFTOKEN'
                }),
                _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_11__["NgxDnDModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_state_state__WEBPACK_IMPORTED_MODULE_1__["reducers"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/avatar.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/avatar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar-text\">{{ (user | async)?.initials }}</div>"

/***/ }),

/***/ "./src/app/components/avatar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/avatar.component.ts ***!
  \************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_selectors_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/selectors/user */ "./src/app/state/selectors/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(store) {
        this.store = store;
    }
    AvatarComponent.prototype.ngOnChanges = function (changes) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](changes, 'id.currentValue')) {
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(Object(_state_selectors_user__WEBPACK_IMPORTED_MODULE_3__["getUserById"])(this.id)));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], AvatarComponent.prototype, "id", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[avatar]',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/components/avatar.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/components/task-board-filter.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/task-board-filter.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-box\">\n    <a class=\"pointer\" (click)=\"open=!open\">Filter <i class=\"icon-down-open\"></i></a>\n    <div class=\"filter-options\" *ngIf=\"open\">\n        <label>User</label>\n        <select [(ngModel)]=\"filters.user\" (ngModelChange)=\"onUserChange($event)\">\n            <option *ngFor=\"let option of users$ | async\" [ngValue]=\"option.id\">{{ option.full_name }}</option>\n        </select>\n        <label>Client</label>\n        <select [(ngModel)]=\"filters.client\" (ngModelChange)=\"onClientChange($event)\">\n            <option [ngValue]=\"null\">---------</option>\n            <option *ngFor=\"let option of clients$ | async\" [ngValue]=\"option.id\">{{ option.name }}</option>\n        </select>\n        <label>Job</label>\n        <select [(ngModel)]=\"filters.job\" (ngModelChange)=\"onJobChange($event)\">\n            <option [ngValue]=\"null\">---------</option>\n            <ng-container *ngFor=\"let option of jobs$ | async\">\n                <option *ngIf=\"option.client === filters.client\" [ngValue]=\"option.id\">{{ option.title }}</option>\n            </ng-container>\n        </select>\n        <label>Overdue</label>\n        <div class=\"checkbox\">\n            <label>\n                <input type=\"checkbox\" [(ngModel)]=\"filters.overdue\" (ngModelChange)=\"onOverdueChange($event)\">\n                <span></span>\n            </label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/task-board-filter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/task-board-filter.component.ts ***!
  \***********************************************************/
/*! exports provided: TaskboardFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardFilterComponent", function() { return TaskboardFilterComponent; });
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../state/state */ "./src/app/state/state.ts");
/* harmony import */ var _state_selectors_job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/selectors/job */ "./src/app/state/selectors/job.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskboardFilterComponent = /** @class */ (function () {
    function TaskboardFilterComponent(store) {
        var _this = this;
        this.store = store;
        this.client = null;
        this.job = null;
        this.user = null;
        this.clients$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getClientState"]));
        this.jobs$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_selectors_job__WEBPACK_IMPORTED_MODULE_4__["getJobCollection"]));
        this.users$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getUserState"]));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getMeState"])).subscribe(function (m) { return _this.onUserChange(m.id); });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getFilterState"])).subscribe(function (f) { return _this.filters = f; });
    }
    TaskboardFilterComponent.prototype.onClientChange = function (id) {
        console.log(id);
        this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["FilterActions"].CLIENT, payload: id });
        this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["FilterActions"].JOB, payload: null });
    };
    TaskboardFilterComponent.prototype.onJobChange = function (id) {
        this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["FilterActions"].JOB, payload: id });
    };
    TaskboardFilterComponent.prototype.onOverdueChange = function (value) {
        this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["FilterActions"].OVERDUE, payload: value });
    };
    TaskboardFilterComponent.prototype.onUserChange = function (id) {
        this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_0__["FilterActions"].USER, payload: id });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], TaskboardFilterComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], TaskboardFilterComponent.prototype, "job", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], TaskboardFilterComponent.prototype, "user", void 0);
    TaskboardFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'task-board-filter, [task-board-filter]',
            template: __webpack_require__(/*! ./task-board-filter.component.html */ "./src/app/components/task-board-filter.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskboardFilterComponent);
    return TaskboardFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/task-board.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/task-board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header py-2\">\n    <div class=\"container-fluid d-flex align-items-center c-white\">\n        <div class=\"h2 mr-2\">Taskboard</div>\n        <ng-container *ngIf=\"this.statsForTaskboard$ | async as stats\">\n            <div class=\"mr-2\"><strong>Number of tasks</strong> {{ stats.count_of_tasks }}</div>\n            <div class=\"mr-2\"><strong>Allocated hours</strong> {{ stats.allocated_hours }}</div>\n            <div><strong>Overdue tasks</strong> {{ stats.count_of_overdue }}</div>\n        </ng-container>\n        <div class=\"page-header-actions\">\n            <task-board-filter></task-board-filter>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid d-flex flex-fill mt-2 mb-1 scroll-x\">\n    <div class=\"board-column d-flex flex-fill\" *ngFor=\"let status of taskAssigneesForTaskboard$ | async\">\n        <div class=\"board-column-heading d-flex mb-1\">\n            <strong>{{ status.title }}</strong>\n            <i class=\"icon-plus ml-auto\" (click)=\"openCreateForm(status)\"></i>\n        </div>\n        <div class=\"flex-fill board-card-wrapper\" \n            ngxDroppable=\"status-column\" [model]=\"status._assignees\"\n            (drop)=\"droppedIntoColumn(status, status._assignees)\">\n            <div task-card [id]=\"assignee.task\"\n                ngxDraggable [model]=\"assignee\"\n                (click)=\"selectedTaskId=assignee.task\"\n                *ngFor=\"let assignee of status._assignees\">\n            </div>\n        </div>\n    </div>\n</div>    \n<task-create-form\n    [opened]=\"createFormOpen\"\n    [status]=\"createFormStatusId\"\n    (close)=\"createFormOpen = false\"\n    (saved)=\"selectedTaskId = $event.id\"\n    *ngIf=\"createFormOpen\">\n</task-create-form>\n<task-form\n    [id]=\"selectedTaskId\"\n    (close)=\"selectedTaskId = null\"\n    *ngIf=\"selectedTaskId\">\n</task-form>"

/***/ }),

/***/ "./src/app/components/task-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/task-board.component.ts ***!
  \****************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_selectors_taskboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../state/selectors/taskboard */ "./src/app/state/selectors/taskboard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(store) {
        this.store = store;
        this.createFormOpen = false;
        this.taskAssigneesForTaskboard$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_selectors_taskboard__WEBPACK_IMPORTED_MODULE_3__["getTaskAssigneesForTaskboard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100));
        this.statsForTaskboard$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_selectors_taskboard__WEBPACK_IMPORTED_MODULE_3__["getStatsForTaskboard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100));
    }
    TaskboardComponent.prototype.droppedIntoColumn = function (status, assignees) {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_0__["each"](assignees, function (assignee, i) {
            if (assignee._task.status != status.id) {
                var payload = { id: assignee.task, status: status.id };
                _this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH, payload: payload });
            }
            var order = i + 1;
            if (assignee.order != order) {
                var payload = { id: assignee.id, order: order };
                _this.store.dispatch({ type: _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].PATCH, payload: payload });
            }
        });
    };
    TaskboardComponent.prototype.openCreateForm = function (status) {
        this.createFormStatusId = status.id;
        this.createFormOpen = true;
    };
    TaskboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'task-board, [task-board]',
            template: __webpack_require__(/*! ./task-board.component.html */ "./src/app/components/task-board.component.html"),
            host: { 'class': 'd-flex flex-fill flex-column' }
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/components/task-card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/task-card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board-card d-flex flex-column pointer\" *ngIf=\"task$ | async as task\">\n    <div class=\"d-flex align-items-center\">\n        <span class=\"color-indicator\" [style.background]=\"task._job?.colour\"></span>\n        <span class=\"small uppercase\"><strong>{{ task._job?._client?.name }} / {{ task._job?.title }}</strong></span>\n    </div>\n    <p class=\"board-card-desc\">{{ task.title }}</p>\n    <div class=\"d-flex\">\n        <div class=\"mr-auto\">\n            <span class=\"uppercase mr-1\" [class.c-red]=\"task.is_overdue\" *ngIf=\"task.target_date\"><i class=\"icon-bell\"></i> {{ task.target_date | date:'d MMM' }}</span>\n            <span class=\"uppercase\" [class.c-red]=\"task.time_spent_hours > task._allocated_hours\"><i class=\"icon-clock\"></i> {{ task.time_spent_hours }}/{{ task._allocated_hours }}</span>\n        </div>\n        <div>\n            <div avatar [id]=\"assignee.user\" class=\"avatar avatar-small\" *ngFor=\"let assignee of task._assignees\"></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/task-card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/task-card.component.ts ***!
  \***************************************************/
/*! exports provided: TaskCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCardComponent", function() { return TaskCardComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_selectors_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../state/selectors/task */ "./src/app/state/selectors/task.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskCardComponent = /** @class */ (function () {
    function TaskCardComponent(store) {
        this.store = store;
    }
    TaskCardComponent.prototype.ngOnChanges = function (changes) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](changes, 'id.currentValue')) {
            this.task$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(Object(_state_selectors_task__WEBPACK_IMPORTED_MODULE_3__["getTaskCollectionById"])(this.id)));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], TaskCardComponent.prototype, "id", void 0);
    TaskCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'task-card, [task-card]',
            template: __webpack_require__(/*! ./task-card.component.html */ "./src/app/components/task-card.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskCardComponent);
    return TaskCardComponent;
}());



/***/ }),

/***/ "./src/app/components/task-create-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/task-create-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal {{ opened ? 'in': '' }}\" (click)=\"closeEvent($event)\">\n    <div class=\"modal-panel\" #modalPanel>\n        <div class=\"container\">\n            <div class=\"row mb-2\">\n                <div class=\"col\">\n                    <input type=\"text\" [formControl]=\"form.controls.title\" class=\"mb-0-5\" placeholder=\"Title\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    <div class=\"mb-2\">\n                        <p class=\"mb-0-5\"><strong>Description</strong></p>\n                        <textarea autoResize [formControl]=\"form.controls.description\" class=\"mb-0-5\" rows=\"2\"></textarea>\n                    </div>\n                    <button class=\"button\" (click)=\"form.save($event)\">Save</button>\n                </div>\n                <div class=\"col-4\">\n                    <p class=\"mb-0-5\"><strong>Job</strong></p>\n                    <select class=\"full-width input-small\" [(ngModel)]=\"selectedClientId\" (change)=\"changeClient($event)\">\n                        <option [value]=\"null\">Select...</option>\n                        <option *ngFor=\"let option of clients$ | async\" [value]=\"option.id\">{{ option.name }}</option>\n                    </select>\n                    <select class=\"full-width input-small\" [formControl]=\"form.controls.job\">\n                        <option [ngValue]=\"null\">Select...</option>\n                        <ng-container *ngFor=\"let option of jobs$ | async\">\n                            <option *ngIf=\"option.client == selectedClientId\" [ngValue]=\"option.id\">{{ option.title }}</option>\n                        </ng-container>\n                    </select>\n                    <hr>\n\n                    <p class=\"mb-0-5\"><strong>Target Date</strong></p>\n                    <input [formControl]=\"form.controls.target_date\" type=\"date\" class=\"input-small\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/task-create-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/task-create-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TaskCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateFormComponent", function() { return TaskCreateFormComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../state/state */ "./src/app/state/state.ts");
/* harmony import */ var _forms_task_create_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/task-create.form */ "./src/app/forms/task-create.form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskCreateFormComponent = /** @class */ (function () {
    function TaskCreateFormComponent(store, actionsSubject) {
        this.store = store;
        this.actionsSubject = actionsSubject;
        this.opened = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectedClientId = null;
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getUserState"]));
        this.clients$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getClientState"]));
        this.jobs$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getJobState"]));
        this.form = new _forms_task_create_form__WEBPACK_IMPORTED_MODULE_4__["TaskCreateForm"](this.store, this.actionsSubject);
    }
    TaskCreateFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](changes, 'status.currentValue')) {
            this.form.load({ status: this.status });
            this.form.formSaved.subscribe(function (e) {
                _this.close.emit(e.event);
                _this.saved.emit(e.payload);
            });
        }
    };
    TaskCreateFormComponent.prototype.closeEvent = function (event) {
        if (this.modalPanelRef.nativeElement.contains(event.target)) {
            // inside modal - do not close
        }
        else {
            this.close.emit(event);
        }
    };
    TaskCreateFormComponent.prototype.changeClient = function ($event) {
        this.selectedClientId = $event.target.value;
        if ($event.target.value == 'null') {
            this.form.controls.job.setValue(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], TaskCreateFormComponent.prototype, "opened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], TaskCreateFormComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], TaskCreateFormComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], TaskCreateFormComponent.prototype, "saved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], TaskCreateFormComponent.prototype, "modalPanelRef", void 0);
    TaskCreateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'task-create-form, [task-create-form]',
            template: __webpack_require__(/*! ./task-create-form.component.html */ "./src/app/components/task-create-form.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"]])
    ], TaskCreateFormComponent);
    return TaskCreateFormComponent;
}());



/***/ }),

/***/ "./src/app/components/task-form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/task-form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal {{ id ? 'in': '' }}\" *ngIf=\"task$ | async as task\" (click)=\"closeEvent($event)\">\n    <div class=\"modal-panel\" #modalPanel>\n        <div class=\"container\">\n            <div class=\"row mb-2\">\n                <div class=\"col-1 text-right\">\n                    <span class=\"color-indicator mt-1\" [style.background]=\"task._job?.colour\"></span>\n                </div>\n                <div class=\"col-11\">\n                    <div (click)=\"titleForm.editable = true\">\n                        <input type=\"text\" [formControl]=\"titleForm.controls.title\" class=\"mb-0-5\">\n                        <button class=\"input-group-addon button\" *ngIf=\"titleForm.editable\" (click)=\"titleForm.save($event)\">Save</button>\n                        <button class=\"button button-clear\" *ngIf=\"titleForm.editable\" (click)=\"titleForm.cancel($event)\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    <div class=\"mb-2\">\n                        <p class=\"mb-0-5\"><strong>Description</strong></p>\n                        <div (click)=\"descriptionForm.editable = true\">\n                            <textarea autoResize [formControl]=\"descriptionForm.controls.description\" class=\"transparent mb-0-5\" rows=\"2\"></textarea>\n                            <button class=\"button\" *ngIf=\"descriptionForm.editable\" (click)=\"descriptionForm.save($event)\">Save</button>\n                            <button class=\"button button-clear\" *ngIf=\"descriptionForm.editable\" (click)=\"descriptionForm.cancel($event)\">Cancel</button>\n                        </div>\n                    </div>\n\n                    <div class=\"mb-2\">\n                        <p class=\"mb-0-5\"><strong>Notes</strong></p>\n                        <textarea autoResize [formControl]=\"newNoteForm.controls.note\" class=\"full-width mb-0-5\" placeholder=\"Write a note...\" rows=\"2\"></textarea>\n                        <button class=\"button button-secondary\" (click)=\"newNoteForm.save($event)\">Add</button>\n                    </div>\n                    \n                    <ng-container *ngFor=\"let note of task._notes\">\n                        <div class=\"my-1\" *ngIf=\"getOrCreateEditNoteForm(note) as form\">\n                            <div class=\"d-flex align-items-center mb-1\">\n                                <div avatar [id]=\"note.user\" class=\"avatar mr-1\"></div>\n                                <div>{{ note.updated_at | date:'MMM d, y, h:mm a' }}</div>\n                            </div>\n                            <div (click)=\"form.editable = true\">\n                                <textarea autoResize [formControl]=\"form.controls.note\" class=\"panel\" rows=\"1\"></textarea>\n                            </div>\n                            <div class=\"small muted\">\n                                <ng-container *ngIf=\"!form.editable\">\n                                    <button class=\"button button-clear\" (click)=\"$event.stopPropagation(); form.editable = true\">Edit</button> |\n                                    <button class=\"button button-clear\" *ngIf=\"!form.editable\" (click)=\"form.delete($event)\">Delete</button>\n                                </ng-container>\n                                <ng-container *ngIf=\"form.editable\">\n                                    <button class=\"button button-secondary\" (click)=\"form.save($event)\">Save</button>\n                                    <button class=\"button button-clear\" (click)=\"form.cancel($event)\">Cancel</button>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <div class=\"col-4\">\n                    <div (click)=\"jobForm.editable = true\">\n                        <p class=\"mb-0-5\"><strong>Job</strong></p>\n                        <select [disabled]=\"!jobForm.editable\" class=\"full-width input-small\" [(ngModel)]=\"selectedClientId\" (change)=\"changeClient($event)\">\n                            <option [value]=\"null\">Select...</option>\n                            <option *ngFor=\"let option of clients$ | async\" [value]=\"option.id\">{{ option.name }}</option>\n                        </select>\n                        <select class=\"full-width input-small\" [formControl]=\"jobForm.controls.job\">\n                            <option [ngValue]=\"null\">Select...</option>\n                            <ng-container *ngFor=\"let option of jobs$ | async\">\n                                <option *ngIf=\"option.client == selectedClientId\" [ngValue]=\"option.id\">{{ option.title }}</option>\n                            </ng-container>\n                        </select>\n                        <ng-container *ngIf=\"jobForm.editable\">\n                            <button class=\"button button-secondary\" (click)=\"jobForm.save($event)\">Save</button>\n                            <button class=\"button button-clear\" (click)=\"jobForm.cancel($event)\">Cancel</button>\n                        </ng-container>\n                    </div>\n                    <hr>\n                    \n                    <p class=\"mb-0-5\"><strong>Assignees</strong></p>\n                    <div *ngFor=\"let assignee of task._assignees\" class=\"d-inline-block text-center mr-0-5\">\n                        <div avatar [id]=\"assignee.user\" class=\"avatar pointer d-block\" (click)=\"editAssignee(assignee)\"></div>\n                        <small>{{ assignee.allocated_hours }}</small>\n                    </div>\n                    <div class=\"d-inline-block text-center mr-0-5\">\n                        <div class=\"avatar new pointer d-block\" (click)=\"editAssignee({task: task.id})\">\n                            <div class=\"avatar-text\"><i class=\"icon-plus\"></i></div>\n                        </div>\n                        <small>&nbsp;</small>\n                    </div>\n                    <div *ngIf=\"assigneeEditForm && assigneeEditForm.editable\" class=\"mt-1\">\n                        <div class=\"input-group mb-0-5\">\n                            <select [formControl]=\"assigneeEditForm.controls.user\" class=\"input-small mr-1 flex-fill\">\n                                <option [ngValue]=\"null\">Select...</option>\n                                <ng-container *ngFor=\"let option of users$ | async\">\n                                    <option [ngValue]=\"option.id\">{{ option.full_name }}</option>\n                                </ng-container>\n                            </select>\n                            <input type=\"number\" [formControl]=\"assigneeEditForm.controls.allocated_hours\" class=\"input-small\" style=\"flex: 0 1 7rem;\">\n                        </div>\n                        <div class=\"d-flex\">\n                            <button class=\"button button-secondary\" (click)=\"assigneeEditForm.save($event)\">Save</button>\n                            <button class=\"button button-clear\" (click)=\"assigneeEditForm.cancel($event)\">Cancel</button>\n                            <button class=\"button button-clear ml-auto\" *ngIf=\"assigneeEditForm.value.id\" (click)=\"assigneeEditForm.delete($event)\">Delete</button>\n                        </div>\n                    </div>\n                    <hr>\n\n                    <p class=\"mb-0-5\"><strong>Time Spent (hrs)</strong></p>\n                    <p>{{ task.time_spent_hours }} of {{ task._allocated_hours }}</p>\n                    <hr>\n                    <p class=\"mb-0-5\"><strong>Target Date</strong></p>\n                    <div (click)=\"targetDateForm.editable = true\">\n                        <input [formControl]=\"targetDateForm.controls.target_date\" type=\"date\" class=\"input-small\">\n                        <button class=\"button\" *ngIf=\"targetDateForm.editable\" (click)=\"targetDateForm.save($event)\">Save</button>\n                        <button class=\"button button-clear\" *ngIf=\"targetDateForm.editable\" (click)=\"targetDateForm.cancel($event)\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/task-form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/task-form.component.ts ***!
  \***************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../state/state */ "./src/app/state/state.ts");
/* harmony import */ var _forms_base_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _forms_task_assignee_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/task-assignee.form */ "./src/app/forms/task-assignee.form.ts");
/* harmony import */ var _forms_task_description_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms/task-description.form */ "./src/app/forms/task-description.form.ts");
/* harmony import */ var _forms_task_job_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms/task-job.form */ "./src/app/forms/task-job.form.ts");
/* harmony import */ var _forms_task_note_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forms/task-note.form */ "./src/app/forms/task-note.form.ts");
/* harmony import */ var _forms_task_target_date_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/task-target-date.form */ "./src/app/forms/task-target-date.form.ts");
/* harmony import */ var _forms_task_title_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/task-title.form */ "./src/app/forms/task-title.form.ts");
/* harmony import */ var _state_selectors_task__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../state/selectors/task */ "./src/app/state/selectors/task.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TaskFormComponent = /** @class */ (function () {
    function TaskFormComponent(store, actionsSubject) {
        this.store = store;
        this.actionsSubject = actionsSubject;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.taskNoteForms = {};
        this.selectedClientId = null;
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getUserState"]));
        this.clients$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getClientState"]));
        this.jobs$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_state__WEBPACK_IMPORTED_MODULE_3__["getJobState"]));
        this.descriptionForm = new _forms_task_description_form__WEBPACK_IMPORTED_MODULE_6__["TaskDescriptionForm"](this.store, this.actionsSubject);
        this.jobForm = new _forms_task_job_form__WEBPACK_IMPORTED_MODULE_7__["TaskJobForm"](this.store, this.actionsSubject);
        this.titleForm = new _forms_task_title_form__WEBPACK_IMPORTED_MODULE_10__["TaskTitleForm"](this.store, this.actionsSubject);
        this.targetDateForm = new _forms_task_target_date_form__WEBPACK_IMPORTED_MODULE_9__["TaskTargetDateForm"](this.store, this.actionsSubject);
        this.newNoteForm = new _forms_task_note_form__WEBPACK_IMPORTED_MODULE_8__["TaskNoteForm"](this.store, this.actionsSubject);
    }
    TaskFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](changes, 'id.currentValue')) {
            this.task$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(_state_selectors_task__WEBPACK_IMPORTED_MODULE_11__["getTaskCollectionById"])(this.id)));
            this.task$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function (d) {
                _this.selectedClientId = d._job.client;
                _this.descriptionForm.load(d);
                _this.jobForm.load(d);
                _this.titleForm.load(d);
                _this.targetDateForm.load(d);
                _this.newNoteForm.load({ task: d.id });
            });
        }
    };
    TaskFormComponent.prototype.closeEvent = function (event) {
        if (this.modalPanelRef.nativeElement.contains(event.target)) {
            // inside modal - do not close
        }
        else {
            this.close.emit(event);
        }
    };
    TaskFormComponent.prototype.getOrCreateEditNoteForm = function (note) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](this.taskNoteForms, note.id)) {
            var form = new _forms_task_note_form__WEBPACK_IMPORTED_MODULE_8__["TaskNoteForm"](this.store, this.actionsSubject, { alwaysEditable: false, cleanAfterMethod: _forms_base_form__WEBPACK_IMPORTED_MODULE_4__["FormCleanAfterMethod"].loadSaved });
            form.load(note);
            this.taskNoteForms[note.id] = form;
            return this.taskNoteForms[note.id];
        }
        return this.taskNoteForms[note.id];
    };
    TaskFormComponent.prototype.changeClient = function ($event) {
        this.selectedClientId = $event.target.value;
        if ($event.target.value == 'null') {
            this.jobForm.controls.job.setValue(null);
        }
    };
    TaskFormComponent.prototype.editAssignee = function (assignee) {
        this.assigneeEditForm = new _forms_task_assignee_form__WEBPACK_IMPORTED_MODULE_5__["TaskAssigneeForm"](this.store, this.actionsSubject);
        this.assigneeEditForm.editable = true;
        this.assigneeEditForm.load(assignee);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], TaskFormComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], TaskFormComponent.prototype, "modalPanelRef", void 0);
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'task-form, [task-form]',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/components/task-form.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"]])
    ], TaskFormComponent);
    return TaskFormComponent;
}());



/***/ }),

/***/ "./src/app/directives/auto-resize.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/auto-resize.directive.ts ***!
  \*****************************************************/
/*! exports provided: AutoResizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoResizeDirective", function() { return AutoResizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoResizeDirective = /** @class */ (function () {
    function AutoResizeDirective(element) {
        this.element = element;
    }
    AutoResizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutoResizeDirective.prototype.ngAfterViewInit = function () {
        this.adjust();
    };
    AutoResizeDirective.prototype.adjust = function () {
        var ta = this.element.nativeElement;
        var newHeight;
        if (ta) {
            ta.style.overflow = 'hidden';
            ta.style.height = 'auto';
            if (this.maxHeight) {
                newHeight = Math.min(ta.scrollHeight, this.maxHeight);
            }
            else {
                newHeight = ta.scrollHeight;
            }
            ta.style.height = newHeight + 'px';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('autoResize'),
        __metadata("design:type", Number)
    ], AutoResizeDirective.prototype, "maxHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutoResizeDirective.prototype, "onInput", null);
    AutoResizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'textarea[autoResize]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutoResizeDirective);
    return AutoResizeDirective;
}());



/***/ }),

/***/ "./src/app/forms/base.form.ts":
/*!************************************!*\
  !*** ./src/app/forms/base.form.ts ***!
  \************************************/
/*! exports provided: FormCleanAfterMethod, BaseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCleanAfterMethod", function() { return FormCleanAfterMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForm", function() { return BaseForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FormCleanAfterMethod;
(function (FormCleanAfterMethod) {
    FormCleanAfterMethod[FormCleanAfterMethod["empty"] = 0] = "empty";
    FormCleanAfterMethod[FormCleanAfterMethod["resetToInitial"] = 1] = "resetToInitial";
    FormCleanAfterMethod[FormCleanAfterMethod["loadSaved"] = 2] = "loadSaved";
})(FormCleanAfterMethod || (FormCleanAfterMethod = {}));
;
var defaultFormOptions = {
    alwaysEditable: false,
    cleanAfterMethod: FormCleanAfterMethod.loadSaved
};
var BaseForm = /** @class */ (function (_super) {
    __extends(BaseForm, _super);
    function BaseForm(store, actionsSubject, controls, validator, asyncValidator, formOptions) {
        var _this = _super.call(this, controls, validator, asyncValidator) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this._editable = false;
        _this._formDeletedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._formSavedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._subscriptions = [];
        // set the options
        _this.options = lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, defaultFormOptions, formOptions);
        // setup the form
        _this.editable = _this.options.alwaysEditable;
        return _this;
    }
    BaseForm.prototype.ngOnDestroy = function () {
        lodash__WEBPACK_IMPORTED_MODULE_0__["each"](this._subscriptions, function (s) { return s.unsubscribe(); });
    };
    Object.defineProperty(BaseForm.prototype, "formSaved", {
        get: function () {
            return this._formSavedSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseForm.prototype, "formDeleted", {
        get: function () {
            return this._formDeletedSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseForm.prototype, "editable", {
        get: function () {
            return this._editable;
        },
        set: function (value) {
            this._editable = value;
            this.setControlState();
        },
        enumerable: true,
        configurable: true
    });
    BaseForm.prototype.load = function (data) {
        // set the initial data incase we need to reset it
        this.initialData = data;
        // patch the form as no all fields will be defined
        this.patchValue(data);
    };
    BaseForm.prototype.save = function (event) {
        // save the form data
        event.stopPropagation();
        if (!this.valid) {
            return;
        }
        if (this.createAction && !this.value.id) {
            // create a new record as we have no id
            this.store.dispatch({ type: this.createAction, payload: this.value });
        }
        else if (this.updateAction && this.value.id) {
            // update or patch the record
            this.store.dispatch({ type: this.updateAction, payload: this.value });
        }
        else {
            return;
        }
        // wait for the result
        this.waitForResult(event);
    };
    BaseForm.prototype.cancel = function (event) {
        event.stopPropagation();
        this.reset(this.initialData);
        if (!this.options.alwaysEditable) {
            this.editable = false;
        }
    };
    BaseForm.prototype.delete = function (event) {
        // delete the instance in the form
        event.stopPropagation();
        if (!this.deleteAction || !this.value.id) {
            return;
        }
        // delete the record
        this.store.dispatch({ type: this.deleteAction, payload: this.value });
        // wait for the result
        this.waitForResult(event);
    };
    BaseForm.prototype.resetAndClose = function (payload) {
        if (this.options.cleanAfterMethod == FormCleanAfterMethod.empty) {
            this.initialData = {};
        }
        else if (this.options.cleanAfterMethod == FormCleanAfterMethod.loadSaved) {
            this.initialData = payload;
        }
        else if (this.options.cleanAfterMethod == FormCleanAfterMethod.resetToInitial) {
            // do nothing
        }
        this.reset(this.initialData);
        if (!this.options.alwaysEditable) {
            this.editable = false;
        }
    };
    BaseForm.prototype.setControlState = function () {
        // enable or disable all controls
        if (this.editable) {
            this.enable();
        }
        else {
            this.disable();
        }
    };
    BaseForm.prototype.waitForResult = function (event) {
        var _this = this;
        // all store actions pass through the actionsSubject
        // watch for our save or delete success actions and reset/close the form
        return this.actionsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["includes"]([_this.createSuccessAction, _this.updateSuccessAction, _this.deleteSuccessAction], action.type);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) { return _this.value.id === null || _this.value.id === action.payload.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (action) {
            if (_this.deleteSuccessAction === action.type) {
                // after delete totally reset the form
                // this may need to be taylored later in options but ok for now
                _this.initialData = {};
                _this.reset(_this.initialData);
                _this.editable = false;
                // and push the data to the observable
                _this._formDeletedSubject.next({ event: event, payload: action.payload });
            }
            else {
                // reset the form
                _this.resetAndClose(action.payload);
                // and push the data to the observable
                _this._formSavedSubject.next({ event: event, payload: action.payload });
            }
        });
    };
    return BaseForm;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]));



/***/ }),

/***/ "./src/app/forms/task-assignee.form.ts":
/*!*********************************************!*\
  !*** ./src/app/forms/task-assignee.form.ts ***!
  \*********************************************/
/*! exports provided: TaskAssigneeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssigneeForm", function() { return TaskAssigneeForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: false,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].loadSaved
};
var TaskAssigneeForm = /** @class */ (function (_super) {
    __extends(TaskAssigneeForm, _super);
    function TaskAssigneeForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            allocated_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].UPDATE;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].UPDATE_SUCCESS;
        _this.deleteAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].REMOVE;
        _this.deleteSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskAssigneeActions"].REMOVE_SUCCESS;
        return _this;
    }
    return TaskAssigneeForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-create.form.ts":
/*!*******************************************!*\
  !*** ./src/app/forms/task-create.form.ts ***!
  \*******************************************/
/*! exports provided: TaskCreateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateForm", function() { return TaskCreateForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: true,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].resetToInitial
};
var TaskCreateForm = /** @class */ (function (_super) {
    __extends(TaskCreateForm, _super);
    function TaskCreateForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            target_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD_SUCCESS;
        return _this;
    }
    return TaskCreateForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-description.form.ts":
/*!************************************************!*\
  !*** ./src/app/forms/task-description.form.ts ***!
  \************************************************/
/*! exports provided: TaskDescriptionForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDescriptionForm", function() { return TaskDescriptionForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: false,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].loadSaved
};
var TaskDescriptionForm = /** @class */ (function (_super) {
    __extends(TaskDescriptionForm, _super);
    function TaskDescriptionForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH_SUCCESS;
        return _this;
    }
    return TaskDescriptionForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-job.form.ts":
/*!****************************************!*\
  !*** ./src/app/forms/task-job.form.ts ***!
  \****************************************/
/*! exports provided: TaskJobForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskJobForm", function() { return TaskJobForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: false,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].loadSaved
};
var TaskJobForm = /** @class */ (function (_super) {
    __extends(TaskJobForm, _super);
    function TaskJobForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH_SUCCESS;
        return _this;
    }
    return TaskJobForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-note.form.ts":
/*!*****************************************!*\
  !*** ./src/app/forms/task-note.form.ts ***!
  \*****************************************/
/*! exports provided: TaskNoteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNoteForm", function() { return TaskNoteForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: true,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].resetToInitial
};
var TaskNoteForm = /** @class */ (function (_super) {
    __extends(TaskNoteForm, _super);
    function TaskNoteForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].UPDATE;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].UPDATE_SUCCESS;
        _this.deleteAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].REMOVE;
        _this.deleteSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskNoteActions"].REMOVE_SUCCESS;
        return _this;
    }
    return TaskNoteForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-target-date.form.ts":
/*!************************************************!*\
  !*** ./src/app/forms/task-target-date.form.ts ***!
  \************************************************/
/*! exports provided: TaskTargetDateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTargetDateForm", function() { return TaskTargetDateForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: false,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].loadSaved
};
var TaskTargetDateForm = /** @class */ (function (_super) {
    __extends(TaskTargetDateForm, _super);
    function TaskTargetDateForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            target_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH_SUCCESS;
        // when the date field is emptied set it to null as an empty
        // string is an invalid date format in drf.
        var sub = _this.controls.target_date.valueChanges.subscribe(function (value) {
            if (value === '') {
                _this.controls.target_date.setValue(null);
            }
        });
        _this._subscriptions.push(sub);
        return _this;
    }
    return TaskTargetDateForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/forms/task-title.form.ts":
/*!******************************************!*\
  !*** ./src/app/forms/task-title.form.ts ***!
  \******************************************/
/*! exports provided: TaskTitleForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTitleForm", function() { return TaskTitleForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.form */ "./src/app/forms/base.form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var options = {
    alwaysEditable: false,
    cleanAfterMethod: _base_form__WEBPACK_IMPORTED_MODULE_2__["FormCleanAfterMethod"].loadSaved
};
var TaskTitleForm = /** @class */ (function (_super) {
    __extends(TaskTitleForm, _super);
    function TaskTitleForm(store, actionsSubject, formOptions) {
        var _this = _super.call(this, store, actionsSubject, {
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, null, null, lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, options, formOptions)) || this;
        _this.store = store;
        _this.actionsSubject = actionsSubject;
        _this.createAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD;
        _this.createSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].ADD_SUCCESS;
        _this.updateAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH;
        _this.updateSuccessAction = _state_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActions"].PATCH_SUCCESS;
        return _this;
    }
    return TaskTitleForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_2__["BaseForm"]));



/***/ }),

/***/ "./src/app/services/api.ts":
/*!*********************************!*\
  !*** ./src/app/services/api.ts ***!
  \*********************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
    }
    Object.defineProperty(APIService.prototype, "headers", {
        get: function () {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        },
        enumerable: true,
        configurable: true
    });
    APIService.prototype.all = function (url) {
        return this.http.get("" + url, { headers: this.headers });
    };
    APIService.prototype.one = function (url, id) {
        return this.http.get("" + url + id + "/", { headers: this.headers });
    };
    APIService.prototype.create = function (url, object) {
        return this.http.post("" + url, object, { headers: this.headers });
    };
    APIService.prototype.update = function (url, object) {
        return this.http.put("" + url + object.id + "/", object, { headers: this.headers });
    };
    APIService.prototype.patch = function (url, object) {
        return this.http.patch("" + url + object.id + "/", object, { headers: this.headers });
    };
    APIService.prototype.remove = function (url, object) {
        // Here we are returning the object back as a delete response has no content
        return this.http.delete("" + url + object.id + "/", { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return object; }));
    };
    APIService.prototype.options = function (url) {
        return this.http.options("" + url, { headers: this.headers });
    };
    APIService.prototype.post = function (url, object) {
        return this.http.post("" + url, object, { headers: this.headers });
    };
    APIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/state/actions/client.ts":
/*!*****************************************!*\
  !*** ./src/app/state/actions/client.ts ***!
  \*****************************************/
/*! exports provided: ClientActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientActions", function() { return ClientActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientActions = /** @class */ (function () {
    function ClientActions() {
    }
    ClientActions_1 = ClientActions;
    ClientActions.prototype.LoadAll = function () {
        return { type: ClientActions_1.LOAD_ALL };
    };
    ClientActions.prototype.LoadAllSuccess = function (payload) {
        return { type: ClientActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    ClientActions.prototype.LoadOne = function (payload) {
        return { type: ClientActions_1.LOAD_ONE, payload: payload };
    };
    ClientActions.prototype.LoadOneSuccess = function (payload) {
        return { type: ClientActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    ClientActions.prototype.Add = function (payload) {
        return { type: ClientActions_1.ADD, payload: payload };
    };
    ClientActions.prototype.AddSuccess = function (payload) {
        return { type: ClientActions_1.ADD_SUCCESS, payload: payload };
    };
    ClientActions.prototype.Update = function (payload) {
        return { type: ClientActions_1.UPDATE, payload: payload };
    };
    ClientActions.prototype.UpdateSuccess = function (payload) {
        return { type: ClientActions_1.UPDATE_SUCCESS, payload: payload };
    };
    ClientActions.prototype.Remove = function (payload) {
        return { type: ClientActions_1.REMOVE, payload: payload };
    };
    ClientActions.prototype.RemoveSuccess = function (payload) {
        return { type: ClientActions_1.REMOVE_SUCCESS, payload: payload };
    };
    var ClientActions_1;
    ClientActions.LOAD_ALL = '[Client] LOAD_ALL';
    ClientActions.LOAD_ALL_SUCCESS = '[Client] LOAD_ALL_SUCCESS';
    ClientActions.LOAD_ONE = '[Client] LOAD_ONE';
    ClientActions.LOAD_ONE_SUCCESS = '[Client] LOAD_ONE_SUCCESS';
    ClientActions.ADD = '[Client] ADD';
    ClientActions.ADD_SUCCESS = '[Client] ADD_SUCCESS';
    ClientActions.UPDATE = '[Client] UPDATE';
    ClientActions.UPDATE_SUCCESS = '[Client] UPDATE_SUCCESS';
    ClientActions.REMOVE = '[Client] REMOVE';
    ClientActions.REMOVE_SUCCESS = '[Client] REMOVE_SUCCESS';
    ClientActions = ClientActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ClientActions);
    return ClientActions;
}());



/***/ }),

/***/ "./src/app/state/actions/data.ts":
/*!***************************************!*\
  !*** ./src/app/state/actions/data.ts ***!
  \***************************************/
/*! exports provided: DataActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataActions", function() { return DataActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataActions = /** @class */ (function () {
    function DataActions() {
    }
    DataActions_1 = DataActions;
    DataActions.prototype.LoadData = function (payload) {
        return { type: DataActions_1.LOAD_DATA, payload: payload };
    };
    var DataActions_1;
    DataActions.LOAD_DATA = '[Data] LOAD_DATA';
    DataActions = DataActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataActions);
    return DataActions;
}());



/***/ }),

/***/ "./src/app/state/actions/filters.ts":
/*!******************************************!*\
  !*** ./src/app/state/actions/filters.ts ***!
  \******************************************/
/*! exports provided: FilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActions", function() { return FilterActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterActions = /** @class */ (function () {
    function FilterActions() {
    }
    FilterActions_1 = FilterActions;
    FilterActions.prototype.Client = function (payload) {
        return { type: FilterActions_1.CLIENT, payload: payload };
    };
    FilterActions.prototype.Job = function (payload) {
        return { type: FilterActions_1.JOB, payload: payload };
    };
    FilterActions.prototype.Overdue = function (payload) {
        return { type: FilterActions_1.OVERDUE, payload: payload };
    };
    FilterActions.prototype.User = function (payload) {
        return { type: FilterActions_1.USER, payload: payload };
    };
    var FilterActions_1;
    FilterActions.CLIENT = '[Filter] CLIENT';
    FilterActions.JOB = '[Filter] JOB';
    FilterActions.OVERDUE = '[Filter] OVERDUE';
    FilterActions.USER = '[Filter] USER';
    FilterActions = FilterActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterActions);
    return FilterActions;
}());



/***/ }),

/***/ "./src/app/state/actions/http.ts":
/*!***************************************!*\
  !*** ./src/app/state/actions/http.ts ***!
  \***************************************/
/*! exports provided: HttpActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpActions", function() { return HttpActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpActions = /** @class */ (function () {
    function HttpActions() {
    }
    HttpActions_1 = HttpActions;
    HttpActions.prototype.HttpError = function (payload) {
        return { type: HttpActions_1.HTTP_ERROR, payload: payload };
    };
    var HttpActions_1;
    HttpActions.HTTP_ERROR = '[Http] HTTP_ERROR';
    HttpActions = HttpActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpActions);
    return HttpActions;
}());



/***/ }),

/***/ "./src/app/state/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/state/actions/index.ts ***!
  \****************************************/
/*! exports provided: ClientActions, DataActions, FilterActions, HttpActions, JobActions, MeActions, TaskActions, TaskAssigneeActions, TaskNoteActions, TaskStatusActions, UserActions, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./src/app/state/actions/client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientActions", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["ClientActions"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/state/actions/data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataActions", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["DataActions"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/app/state/actions/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterActions", function() { return _filters__WEBPACK_IMPORTED_MODULE_2__["FilterActions"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http */ "./src/app/state/actions/http.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpActions", function() { return _http__WEBPACK_IMPORTED_MODULE_3__["HttpActions"]; });

/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job */ "./src/app/state/actions/job.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobActions", function() { return _job__WEBPACK_IMPORTED_MODULE_4__["JobActions"]; });

/* harmony import */ var _me__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./me */ "./src/app/state/actions/me.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeActions", function() { return _me__WEBPACK_IMPORTED_MODULE_5__["MeActions"]; });

/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task */ "./src/app/state/actions/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskActions", function() { return _task__WEBPACK_IMPORTED_MODULE_6__["TaskActions"]; });

/* harmony import */ var _taskassignee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskassignee */ "./src/app/state/actions/taskassignee.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskAssigneeActions", function() { return _taskassignee__WEBPACK_IMPORTED_MODULE_7__["TaskAssigneeActions"]; });

/* harmony import */ var _tasknote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasknote */ "./src/app/state/actions/tasknote.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskNoteActions", function() { return _tasknote__WEBPACK_IMPORTED_MODULE_8__["TaskNoteActions"]; });

/* harmony import */ var _taskstatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskstatus */ "./src/app/state/actions/taskstatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskStatusActions", function() { return _taskstatus__WEBPACK_IMPORTED_MODULE_9__["TaskStatusActions"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user */ "./src/app/state/actions/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return _user__WEBPACK_IMPORTED_MODULE_10__["UserActions"]; });













var actions = [
    _client__WEBPACK_IMPORTED_MODULE_0__["ClientActions"],
    _data__WEBPACK_IMPORTED_MODULE_1__["DataActions"],
    _filters__WEBPACK_IMPORTED_MODULE_2__["FilterActions"],
    _http__WEBPACK_IMPORTED_MODULE_3__["HttpActions"],
    _job__WEBPACK_IMPORTED_MODULE_4__["JobActions"],
    _me__WEBPACK_IMPORTED_MODULE_5__["MeActions"],
    _task__WEBPACK_IMPORTED_MODULE_6__["TaskActions"],
    _taskassignee__WEBPACK_IMPORTED_MODULE_7__["TaskAssigneeActions"],
    _tasknote__WEBPACK_IMPORTED_MODULE_8__["TaskNoteActions"],
    _taskstatus__WEBPACK_IMPORTED_MODULE_9__["TaskStatusActions"],
    _user__WEBPACK_IMPORTED_MODULE_10__["UserActions"]
];


/***/ }),

/***/ "./src/app/state/actions/job.ts":
/*!**************************************!*\
  !*** ./src/app/state/actions/job.ts ***!
  \**************************************/
/*! exports provided: JobActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobActions", function() { return JobActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JobActions = /** @class */ (function () {
    function JobActions() {
    }
    JobActions_1 = JobActions;
    JobActions.prototype.LoadAll = function () {
        return { type: JobActions_1.LOAD_ALL };
    };
    JobActions.prototype.LoadAllSuccess = function (payload) {
        return { type: JobActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    JobActions.prototype.LoadOne = function (payload) {
        return { type: JobActions_1.LOAD_ONE, payload: payload };
    };
    JobActions.prototype.LoadOneSuccess = function (payload) {
        return { type: JobActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    JobActions.prototype.Add = function (payload) {
        return { type: JobActions_1.ADD, payload: payload };
    };
    JobActions.prototype.AddSuccess = function (payload) {
        return { type: JobActions_1.ADD_SUCCESS, payload: payload };
    };
    JobActions.prototype.Update = function (payload) {
        return { type: JobActions_1.UPDATE, payload: payload };
    };
    JobActions.prototype.UpdateSuccess = function (payload) {
        return { type: JobActions_1.UPDATE_SUCCESS, payload: payload };
    };
    JobActions.prototype.Remove = function (payload) {
        return { type: JobActions_1.REMOVE, payload: payload };
    };
    JobActions.prototype.RemoveSuccess = function (payload) {
        return { type: JobActions_1.REMOVE_SUCCESS, payload: payload };
    };
    var JobActions_1;
    JobActions.LOAD_ALL = '[Job] LOAD_ALL';
    JobActions.LOAD_ALL_SUCCESS = '[Job] LOAD_ALL_SUCCESS';
    JobActions.LOAD_ONE = '[Job] LOAD_ONE';
    JobActions.LOAD_ONE_SUCCESS = '[Job] LOAD_ONE_SUCCESS';
    JobActions.ADD = '[Job] ADD';
    JobActions.ADD_SUCCESS = '[Job] ADD_SUCCESS';
    JobActions.UPDATE = '[Job] UPDATE';
    JobActions.UPDATE_SUCCESS = '[Job] UPDATE_SUCCESS';
    JobActions.REMOVE = '[Job] REMOVE';
    JobActions.REMOVE_SUCCESS = '[Job] REMOVE_SUCCESS';
    JobActions = JobActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], JobActions);
    return JobActions;
}());



/***/ }),

/***/ "./src/app/state/actions/me.ts":
/*!*************************************!*\
  !*** ./src/app/state/actions/me.ts ***!
  \*************************************/
/*! exports provided: MeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeActions", function() { return MeActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MeActions = /** @class */ (function () {
    function MeActions() {
    }
    MeActions_1 = MeActions;
    MeActions.prototype.Load = function () {
        return { type: MeActions_1.LOAD };
    };
    MeActions.prototype.LoadSuccess = function (payload) {
        return { type: MeActions_1.LOAD_SUCCESS, payload: payload };
    };
    var MeActions_1;
    MeActions.LOAD = '[Me] LOAD';
    MeActions.LOAD_SUCCESS = '[Me] LOAD_SUCCESS';
    MeActions = MeActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MeActions);
    return MeActions;
}());



/***/ }),

/***/ "./src/app/state/actions/task.ts":
/*!***************************************!*\
  !*** ./src/app/state/actions/task.ts ***!
  \***************************************/
/*! exports provided: TaskActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskActions", function() { return TaskActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskActions = /** @class */ (function () {
    function TaskActions() {
    }
    TaskActions_1 = TaskActions;
    TaskActions.prototype.LoadAll = function () {
        return { type: TaskActions_1.LOAD_ALL };
    };
    TaskActions.prototype.LoadAllSuccess = function (payload) {
        return { type: TaskActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    TaskActions.prototype.LoadOne = function (payload) {
        return { type: TaskActions_1.LOAD_ONE, payload: payload };
    };
    TaskActions.prototype.LoadOneSuccess = function (payload) {
        return { type: TaskActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    TaskActions.prototype.Add = function (payload) {
        return { type: TaskActions_1.ADD, payload: payload };
    };
    TaskActions.prototype.AddSuccess = function (payload) {
        return { type: TaskActions_1.ADD_SUCCESS, payload: payload };
    };
    TaskActions.prototype.Update = function (payload) {
        return { type: TaskActions_1.UPDATE, payload: payload };
    };
    TaskActions.prototype.UpdateSuccess = function (payload) {
        return { type: TaskActions_1.UPDATE_SUCCESS, payload: payload };
    };
    TaskActions.prototype.Patch = function (payload) {
        return { type: TaskActions_1.PATCH, payload: payload };
    };
    TaskActions.prototype.PatchSuccess = function (payload) {
        return { type: TaskActions_1.PATCH_SUCCESS, payload: payload };
    };
    TaskActions.prototype.Remove = function (payload) {
        return { type: TaskActions_1.REMOVE, payload: payload };
    };
    TaskActions.prototype.RemoveSuccess = function (payload) {
        return { type: TaskActions_1.REMOVE_SUCCESS, payload: payload };
    };
    var TaskActions_1;
    TaskActions.LOAD_ALL = '[Task] LOAD_ALL';
    TaskActions.LOAD_ALL_SUCCESS = '[Task] LOAD_ALL_SUCCESS';
    TaskActions.LOAD_ONE = '[Task] LOAD_ONE';
    TaskActions.LOAD_ONE_SUCCESS = '[Task] LOAD_ONE_SUCCESS';
    TaskActions.ADD = '[Task] ADD';
    TaskActions.ADD_SUCCESS = '[Task] ADD_SUCCESS';
    TaskActions.UPDATE = '[Task] UPDATE';
    TaskActions.UPDATE_SUCCESS = '[Task] UPDATE_SUCCESS';
    TaskActions.PATCH = '[Task] PATCH';
    TaskActions.PATCH_SUCCESS = '[Task] PATCH_SUCCESS';
    TaskActions.REMOVE = '[Task] REMOVE';
    TaskActions.REMOVE_SUCCESS = '[Task] REMOVE_SUCCESS';
    TaskActions = TaskActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskActions);
    return TaskActions;
}());



/***/ }),

/***/ "./src/app/state/actions/taskassignee.ts":
/*!***********************************************!*\
  !*** ./src/app/state/actions/taskassignee.ts ***!
  \***********************************************/
/*! exports provided: TaskAssigneeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssigneeActions", function() { return TaskAssigneeActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskAssigneeActions = /** @class */ (function () {
    function TaskAssigneeActions() {
    }
    TaskAssigneeActions_1 = TaskAssigneeActions;
    TaskAssigneeActions.prototype.LoadAll = function () {
        return { type: TaskAssigneeActions_1.LOAD_ALL };
    };
    TaskAssigneeActions.prototype.LoadAllSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    TaskAssigneeActions.prototype.LoadOne = function (payload) {
        return { type: TaskAssigneeActions_1.LOAD_ONE, payload: payload };
    };
    TaskAssigneeActions.prototype.LoadOneSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    TaskAssigneeActions.prototype.Add = function (payload) {
        return { type: TaskAssigneeActions_1.ADD, payload: payload };
    };
    TaskAssigneeActions.prototype.AddSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.ADD_SUCCESS, payload: payload };
    };
    TaskAssigneeActions.prototype.Update = function (payload) {
        return { type: TaskAssigneeActions_1.UPDATE, payload: payload };
    };
    TaskAssigneeActions.prototype.UpdateSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.UPDATE_SUCCESS, payload: payload };
    };
    TaskAssigneeActions.prototype.Patch = function (payload) {
        return { type: TaskAssigneeActions_1.PATCH, payload: payload };
    };
    TaskAssigneeActions.prototype.PatchSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.PATCH_SUCCESS, payload: payload };
    };
    TaskAssigneeActions.prototype.Remove = function (payload) {
        return { type: TaskAssigneeActions_1.REMOVE, payload: payload };
    };
    TaskAssigneeActions.prototype.RemoveSuccess = function (payload) {
        return { type: TaskAssigneeActions_1.REMOVE_SUCCESS, payload: payload };
    };
    var TaskAssigneeActions_1;
    TaskAssigneeActions.LOAD_ALL = '[TaskAssignee] LOAD_ALL';
    TaskAssigneeActions.LOAD_ALL_SUCCESS = '[TaskAssignee] LOAD_ALL_SUCCESS';
    TaskAssigneeActions.LOAD_ONE = '[TaskAssignee] LOAD_ONE';
    TaskAssigneeActions.LOAD_ONE_SUCCESS = '[TaskAssignee] LOAD_ONE_SUCCESS';
    TaskAssigneeActions.ADD = '[TaskAssignee] ADD';
    TaskAssigneeActions.ADD_SUCCESS = '[TaskAssignee] ADD_SUCCESS';
    TaskAssigneeActions.UPDATE = '[TaskAssignee] UPDATE';
    TaskAssigneeActions.UPDATE_SUCCESS = '[TaskAssignee] UPDATE_SUCCESS';
    TaskAssigneeActions.PATCH = '[TaskAssignee] PATCH';
    TaskAssigneeActions.PATCH_SUCCESS = '[TaskAssignee] PATCH_SUCCESS';
    TaskAssigneeActions.REMOVE = '[TaskAssignee] REMOVE';
    TaskAssigneeActions.REMOVE_SUCCESS = '[TaskAssignee] REMOVE_SUCCESS';
    TaskAssigneeActions = TaskAssigneeActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskAssigneeActions);
    return TaskAssigneeActions;
}());



/***/ }),

/***/ "./src/app/state/actions/tasknote.ts":
/*!*******************************************!*\
  !*** ./src/app/state/actions/tasknote.ts ***!
  \*******************************************/
/*! exports provided: TaskNoteActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNoteActions", function() { return TaskNoteActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskNoteActions = /** @class */ (function () {
    function TaskNoteActions() {
    }
    TaskNoteActions_1 = TaskNoteActions;
    TaskNoteActions.prototype.LoadAll = function () {
        return { type: TaskNoteActions_1.LOAD_ALL };
    };
    TaskNoteActions.prototype.LoadAllSuccess = function (payload) {
        return { type: TaskNoteActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    TaskNoteActions.prototype.LoadOne = function (payload) {
        return { type: TaskNoteActions_1.LOAD_ONE, payload: payload };
    };
    TaskNoteActions.prototype.LoadOneSuccess = function (payload) {
        return { type: TaskNoteActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    TaskNoteActions.prototype.Add = function (payload) {
        return { type: TaskNoteActions_1.ADD, payload: payload };
    };
    TaskNoteActions.prototype.AddSuccess = function (payload) {
        return { type: TaskNoteActions_1.ADD_SUCCESS, payload: payload };
    };
    TaskNoteActions.prototype.Update = function (payload) {
        return { type: TaskNoteActions_1.UPDATE, payload: payload };
    };
    TaskNoteActions.prototype.UpdateSuccess = function (payload) {
        return { type: TaskNoteActions_1.UPDATE_SUCCESS, payload: payload };
    };
    TaskNoteActions.prototype.Remove = function (payload) {
        return { type: TaskNoteActions_1.REMOVE, payload: payload };
    };
    TaskNoteActions.prototype.RemoveSuccess = function (payload) {
        return { type: TaskNoteActions_1.REMOVE_SUCCESS, payload: payload };
    };
    var TaskNoteActions_1;
    TaskNoteActions.LOAD_ALL = '[TaskNote] LOAD_ALL';
    TaskNoteActions.LOAD_ALL_SUCCESS = '[TaskNote] LOAD_ALL_SUCCESS';
    TaskNoteActions.LOAD_ONE = '[TaskNote] LOAD_ONE';
    TaskNoteActions.LOAD_ONE_SUCCESS = '[TaskNote] LOAD_ONE_SUCCESS';
    TaskNoteActions.ADD = '[TaskNote] ADD';
    TaskNoteActions.ADD_SUCCESS = '[TaskNote] ADD_SUCCESS';
    TaskNoteActions.UPDATE = '[TaskNote] UPDATE';
    TaskNoteActions.UPDATE_SUCCESS = '[TaskNote] UPDATE_SUCCESS';
    TaskNoteActions.REMOVE = '[TaskNote] REMOVE';
    TaskNoteActions.REMOVE_SUCCESS = '[TaskNote] REMOVE_SUCCESS';
    TaskNoteActions = TaskNoteActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskNoteActions);
    return TaskNoteActions;
}());



/***/ }),

/***/ "./src/app/state/actions/taskstatus.ts":
/*!*********************************************!*\
  !*** ./src/app/state/actions/taskstatus.ts ***!
  \*********************************************/
/*! exports provided: TaskStatusActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusActions", function() { return TaskStatusActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskStatusActions = /** @class */ (function () {
    function TaskStatusActions() {
    }
    TaskStatusActions_1 = TaskStatusActions;
    TaskStatusActions.prototype.LoadAll = function () {
        return { type: TaskStatusActions_1.LOAD_ALL };
    };
    TaskStatusActions.prototype.LoadAllSuccess = function (payload) {
        return { type: TaskStatusActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    TaskStatusActions.prototype.LoadOne = function (payload) {
        return { type: TaskStatusActions_1.LOAD_ONE, payload: payload };
    };
    TaskStatusActions.prototype.LoadOneSuccess = function (payload) {
        return { type: TaskStatusActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    var TaskStatusActions_1;
    TaskStatusActions.LOAD_ALL = '[TaskStatus] LOAD_ALL';
    TaskStatusActions.LOAD_ALL_SUCCESS = '[TaskStatus] LOAD_ALL_SUCCESS';
    TaskStatusActions.LOAD_ONE = '[TaskStatus] LOAD_ONE';
    TaskStatusActions.LOAD_ONE_SUCCESS = '[TaskStatus] LOAD_ONE_SUCCESS';
    TaskStatusActions = TaskStatusActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskStatusActions);
    return TaskStatusActions;
}());



/***/ }),

/***/ "./src/app/state/actions/user.ts":
/*!***************************************!*\
  !*** ./src/app/state/actions/user.ts ***!
  \***************************************/
/*! exports provided: UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return UserActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserActions = /** @class */ (function () {
    function UserActions() {
    }
    UserActions_1 = UserActions;
    UserActions.prototype.LoadAll = function () {
        return { type: UserActions_1.LOAD_ALL };
    };
    UserActions.prototype.LoadAllSuccess = function (payload) {
        return { type: UserActions_1.LOAD_ALL_SUCCESS, payload: payload };
    };
    UserActions.prototype.LoadOne = function (payload) {
        return { type: UserActions_1.LOAD_ONE, payload: payload };
    };
    UserActions.prototype.LoadOneSuccess = function (payload) {
        return { type: UserActions_1.LOAD_ONE_SUCCESS, payload: payload };
    };
    var UserActions_1;
    UserActions.LOAD_ALL = '[User] LOAD_ALL';
    UserActions.LOAD_ALL_SUCCESS = '[User] LOAD_ALL_SUCCESS';
    UserActions.LOAD_ONE = '[User] LOAD_ONE';
    UserActions.LOAD_ONE_SUCCESS = '[User] LOAD_ONE_SUCCESS';
    UserActions = UserActions_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UserActions);
    return UserActions;
}());



/***/ }),

/***/ "./src/app/state/api.ts":
/*!******************************!*\
  !*** ./src/app/state/api.ts ***!
  \******************************/
/*! exports provided: APIBaseEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIBaseEffects", function() { return APIBaseEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/app/services/api.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var APIBaseEffects = /** @class */ (function () {
    function APIBaseEffects(updates$, service$) {
        var _this = this;
        this.updates$ = updates$;
        this.service$ = service$;
        this.url = '';
        this._all$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this.service$.all(_this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
        this._one$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (id) {
            return _this.service$.one(_this.apiUrl, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
        this._add$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (obj) {
            return _this.service$.create(_this.apiUrl, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
        this._update$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (obj) {
            return _this.service$.update(_this.apiUrl, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
        this._patch$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (obj) {
            return _this.service$.patch(_this.apiUrl, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
        this._remove$ = function (actionOfType, successOfType) { return _this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(actionOfType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (obj) {
            return _this.service$.remove(_this.apiUrl, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return ({ type: successOfType, payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["HttpActions"].HTTP_ERROR, payload: res }); }));
        })); };
    }
    Object.defineProperty(APIBaseEffects.prototype, "apiUrl", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    APIBaseEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"],
            _services_api__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], APIBaseEffects);
    return APIBaseEffects;
}());



/***/ }),

/***/ "./src/app/state/effects/client.ts":
/*!*****************************************!*\
  !*** ./src/app/state/effects/client.ts ***!
  \*****************************************/
/*! exports provided: ClientEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEffects", function() { return ClientEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEffects = /** @class */ (function (_super) {
    __extends(ClientEffects, _super);
    function ClientEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/clients/';
        _this.prefix = '[Client]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        _this.add$ = _this._add$(_this.prefix + " ADD", _this.prefix + " ADD_SUCCESS");
        _this.update$ = _this._update$(_this.prefix + " UPDATE", _this.prefix + " UPDATE_SUCCESS");
        _this.remove$ = _this._remove$(_this.prefix + " REMOVE", _this.prefix + " REMOVE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ClientEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ClientEffects.prototype, "one$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ClientEffects.prototype, "add$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ClientEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ClientEffects.prototype, "remove$", void 0);
    ClientEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ClientEffects);
    return ClientEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/data.ts":
/*!***************************************!*\
  !*** ./src/app/state/effects/data.ts ***!
  \***************************************/
/*! exports provided: DataEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEffects", function() { return DataEffects; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/state/actions/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataEffects = /** @class */ (function () {
    function DataEffects(updates$) {
        this.updates$ = updates$;
        this.loadData$ = this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_0__["DataActions"].LOAD_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            return [
                new _actions__WEBPACK_IMPORTED_MODULE_0__["ClientActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["JobActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["MeActions"]().Load(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["TaskActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["TaskAssigneeActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["TaskNoteActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["TaskStatusActions"]().LoadAll(),
                new _actions__WEBPACK_IMPORTED_MODULE_0__["UserActions"]().LoadAll()
            ];
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], DataEffects.prototype, "loadData$", void 0);
    DataEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], DataEffects);
    return DataEffects;
}());



/***/ }),

/***/ "./src/app/state/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/state/effects/index.ts ***!
  \****************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./src/app/state/effects/client.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/state/effects/data.ts");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job */ "./src/app/state/effects/job.ts");
/* harmony import */ var _me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./me */ "./src/app/state/effects/me.ts");
/* harmony import */ var _taskassignee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskassignee */ "./src/app/state/effects/taskassignee.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ "./src/app/state/effects/task.ts");
/* harmony import */ var _tasknote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasknote */ "./src/app/state/effects/tasknote.ts");
/* harmony import */ var _taskstatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskstatus */ "./src/app/state/effects/taskstatus.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user */ "./src/app/state/effects/user.ts");









var effects = [
    _client__WEBPACK_IMPORTED_MODULE_0__["ClientEffects"],
    _data__WEBPACK_IMPORTED_MODULE_1__["DataEffects"],
    _job__WEBPACK_IMPORTED_MODULE_2__["JobEffects"],
    _me__WEBPACK_IMPORTED_MODULE_3__["MeEffects"],
    _task__WEBPACK_IMPORTED_MODULE_5__["TaskEffects"],
    _taskassignee__WEBPACK_IMPORTED_MODULE_4__["TaskAssigneeEffects"],
    _tasknote__WEBPACK_IMPORTED_MODULE_6__["TaskNoteEffects"],
    _taskstatus__WEBPACK_IMPORTED_MODULE_7__["TaskStatusEffects"],
    _user__WEBPACK_IMPORTED_MODULE_8__["UserEffects"]
];


/***/ }),

/***/ "./src/app/state/effects/job.ts":
/*!**************************************!*\
  !*** ./src/app/state/effects/job.ts ***!
  \**************************************/
/*! exports provided: JobEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobEffects", function() { return JobEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobEffects = /** @class */ (function (_super) {
    __extends(JobEffects, _super);
    function JobEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/jobs/';
        _this.prefix = '[Job]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        _this.add$ = _this._add$(_this.prefix + " ADD", _this.prefix + " ADD_SUCCESS");
        _this.update$ = _this._update$(_this.prefix + " UPDATE", _this.prefix + " UPDATE_SUCCESS");
        _this.remove$ = _this._remove$(_this.prefix + " REMOVE", _this.prefix + " REMOVE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], JobEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], JobEffects.prototype, "one$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], JobEffects.prototype, "add$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], JobEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], JobEffects.prototype, "remove$", void 0);
    JobEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], JobEffects);
    return JobEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/me.ts":
/*!*************************************!*\
  !*** ./src/app/state/effects/me.ts ***!
  \*************************************/
/*! exports provided: MeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeEffects", function() { return MeEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeEffects = /** @class */ (function (_super) {
    __extends(MeEffects, _super);
    function MeEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/users/me/';
        _this.prefix = '[Me]';
        _this.load$ = _this._all$(_this.prefix + " LOAD", _this.prefix + " LOAD_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], MeEffects.prototype, "load$", void 0);
    MeEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], MeEffects);
    return MeEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/task.ts":
/*!***************************************!*\
  !*** ./src/app/state/effects/task.ts ***!
  \***************************************/
/*! exports provided: TaskEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEffects", function() { return TaskEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskEffects = /** @class */ (function (_super) {
    __extends(TaskEffects, _super);
    function TaskEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/tasks/';
        _this.prefix = '[Task]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        _this.add$ = _this._add$(_this.prefix + " ADD", _this.prefix + " ADD_SUCCESS");
        _this.update$ = _this._update$(_this.prefix + " UPDATE", _this.prefix + " UPDATE_SUCCESS");
        _this.patch$ = _this._patch$(_this.prefix + " PATCH", _this.prefix + " PATCH_SUCCESS");
        _this.remove$ = _this._remove$(_this.prefix + " REMOVE", _this.prefix + " REMOVE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "one$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "add$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "patch$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskEffects.prototype, "remove$", void 0);
    TaskEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskEffects);
    return TaskEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/taskassignee.ts":
/*!***********************************************!*\
  !*** ./src/app/state/effects/taskassignee.ts ***!
  \***********************************************/
/*! exports provided: TaskAssigneeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssigneeEffects", function() { return TaskAssigneeEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskAssigneeEffects = /** @class */ (function (_super) {
    __extends(TaskAssigneeEffects, _super);
    function TaskAssigneeEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/task-assignees/';
        _this.prefix = '[TaskAssignee]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        _this.add$ = _this._add$(_this.prefix + " ADD", _this.prefix + " ADD_SUCCESS");
        _this.update$ = _this._update$(_this.prefix + " UPDATE", _this.prefix + " UPDATE_SUCCESS");
        _this.patch$ = _this._patch$(_this.prefix + " PATCH", _this.prefix + " PATCH_SUCCESS");
        _this.remove$ = _this._remove$(_this.prefix + " REMOVE", _this.prefix + " REMOVE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "one$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "add$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "patch$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskAssigneeEffects.prototype, "remove$", void 0);
    TaskAssigneeEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskAssigneeEffects);
    return TaskAssigneeEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/tasknote.ts":
/*!*******************************************!*\
  !*** ./src/app/state/effects/tasknote.ts ***!
  \*******************************************/
/*! exports provided: TaskNoteEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNoteEffects", function() { return TaskNoteEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskNoteEffects = /** @class */ (function (_super) {
    __extends(TaskNoteEffects, _super);
    function TaskNoteEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/task-notes/';
        _this.prefix = '[TaskNote]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        _this.add$ = _this._add$(_this.prefix + " ADD", _this.prefix + " ADD_SUCCESS");
        _this.update$ = _this._update$(_this.prefix + " UPDATE", _this.prefix + " UPDATE_SUCCESS");
        _this.remove$ = _this._remove$(_this.prefix + " REMOVE", _this.prefix + " REMOVE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskNoteEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskNoteEffects.prototype, "one$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskNoteEffects.prototype, "add$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskNoteEffects.prototype, "update$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskNoteEffects.prototype, "remove$", void 0);
    TaskNoteEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskNoteEffects);
    return TaskNoteEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/taskstatus.ts":
/*!*********************************************!*\
  !*** ./src/app/state/effects/taskstatus.ts ***!
  \*********************************************/
/*! exports provided: TaskStatusEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusEffects", function() { return TaskStatusEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskStatusEffects = /** @class */ (function (_super) {
    __extends(TaskStatusEffects, _super);
    function TaskStatusEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/task-statuses/';
        _this.prefix = '[TaskStatus]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskStatusEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], TaskStatusEffects.prototype, "one$", void 0);
    TaskStatusEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], TaskStatusEffects);
    return TaskStatusEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/effects/user.ts":
/*!***************************************!*\
  !*** ./src/app/state/effects/user.ts ***!
  \***************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/state/api.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEffects = /** @class */ (function (_super) {
    __extends(UserEffects, _super);
    function UserEffects() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '/api/users/';
        _this.prefix = '[User]';
        _this.all$ = _this._all$(_this.prefix + " LOAD_ALL", _this.prefix + " LOAD_ALL_SUCCESS");
        _this.one$ = _this._one$(_this.prefix + " LOAD_ONE", _this.prefix + " LOAD_ONE_SUCCESS");
        return _this;
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "all$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "one$", void 0);
    UserEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], UserEffects);
    return UserEffects;
}(_api__WEBPACK_IMPORTED_MODULE_0__["APIBaseEffects"]));



/***/ }),

/***/ "./src/app/state/generics.ts":
/*!***********************************!*\
  !*** ./src/app/state/generics.ts ***!
  \***********************************/
/*! exports provided: reduceState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceState", function() { return reduceState; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function reduceState(state, action, type) {
    switch (type) {
        case 'REPLACE_ALL':
            return action.payload;
        case 'REPLACE_ONE':
            var index = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](state, { id: action.payload.id });
            if (index >= 0) {
                // only replace the data if its not the same to avoid a state change
                if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](state[index], action.payload)) {
                    return state;
                }
                else {
                    return state.slice(0, index).concat([
                        action.payload
                    ], state.slice(index + 1));
                }
            }
            return state.concat([action.payload]);
        case 'ADD_ONE':
            return state.concat([action.payload]);
        case 'REMOVE_ONE':
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](state, function (obj) { return obj.id !== action.payload.id; });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/client.ts":
/*!******************************************!*\
  !*** ./src/app/state/reducers/client.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[Client]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " ADD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'ADD_ONE');
        }
        case actionPrefix + " UPDATE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " REMOVE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REMOVE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/filter.ts":
/*!******************************************!*\
  !*** ./src/app/state/reducers/filter.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
    client: null,
    job: null,
    overdue: null,
    user: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[Filter]';
    switch (action.type) {
        case actionPrefix + " CLIENT": {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, state, { client: action.payload });
        }
        case actionPrefix + " JOB": {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, state, { job: action.payload });
        }
        case actionPrefix + " OVERDUE": {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, state, { overdue: action.payload });
        }
        case actionPrefix + " USER": {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, state, { user: action.payload });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/job.ts":
/*!***************************************!*\
  !*** ./src/app/state/reducers/job.ts ***!
  \***************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[Job]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " ADD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'ADD_ONE');
        }
        case actionPrefix + " UPDATE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " REMOVE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REMOVE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/me.ts":
/*!**************************************!*\
  !*** ./src/app/state/reducers/me.ts ***!
  \**************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = {
    id: null,
    full_name: '',
    initials: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[Me]';
    switch (action.type) {
        // primarily used when state is a single object
        case actionPrefix + " LOAD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/task.ts":
/*!****************************************!*\
  !*** ./src/app/state/reducers/task.ts ***!
  \****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[Task]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " ADD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'ADD_ONE');
        }
        case actionPrefix + " UPDATE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " PATCH_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " REMOVE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REMOVE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/taskassignee.ts":
/*!************************************************!*\
  !*** ./src/app/state/reducers/taskassignee.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[TaskAssignee]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " ADD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'ADD_ONE');
        }
        case actionPrefix + " UPDATE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " PATCH_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " REMOVE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REMOVE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/tasknote.ts":
/*!********************************************!*\
  !*** ./src/app/state/reducers/tasknote.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[TaskNote]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " ADD_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'ADD_ONE');
        }
        case actionPrefix + " UPDATE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        case actionPrefix + " REMOVE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REMOVE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/taskstatus.ts":
/*!**********************************************!*\
  !*** ./src/app/state/reducers/taskstatus.ts ***!
  \**********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[TaskStatus]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/reducers/user.ts":
/*!****************************************!*\
  !*** ./src/app/state/reducers/user.ts ***!
  \****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics */ "./src/app/state/generics.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actionPrefix = '[User]';
    switch (action.type) {
        // Replace all objects
        case actionPrefix + " LOAD_ALL_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ALL');
        }
        // Basic CRUD actions
        case actionPrefix + " LOAD_ONE_SUCCESS": {
            return Object(_generics__WEBPACK_IMPORTED_MODULE_0__["reduceState"])(state, action, 'REPLACE_ONE');
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/selectors/job.ts":
/*!****************************************!*\
  !*** ./src/app/state/selectors/job.ts ***!
  \****************************************/
/*! exports provided: getJobCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobCollection", function() { return getJobCollection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/app/state/state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var getJobCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["getClientState"], _state__WEBPACK_IMPORTED_MODULE_1__["getJobState"], function (clients, jobs) {
    var objects = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](jobs, function (job) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, job, {
            _client: lodash__WEBPACK_IMPORTED_MODULE_0__["find"](clients, ['id', job.client])
        });
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](objects, ['title'], ['asc']);
});


/***/ }),

/***/ "./src/app/state/selectors/task.ts":
/*!*****************************************!*\
  !*** ./src/app/state/selectors/task.ts ***!
  \*****************************************/
/*! exports provided: getTaskNotes, getTaskCollection, getTaskCollectionById, getTaskAssigneeCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskNotes", function() { return getTaskNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskCollection", function() { return getTaskCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskCollectionById", function() { return getTaskCollectionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskAssigneeCollection", function() { return getTaskAssigneeCollection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/app/state/state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/app/state/selectors/job.ts");





var getTaskNotes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["getTaskNoteState"], function (notes) { return lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](notes, ['updated_at'], ['desc']); });
var getTaskCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(_job__WEBPACK_IMPORTED_MODULE_3__["getJobCollection"], _state__WEBPACK_IMPORTED_MODULE_1__["getTaskState"], _state__WEBPACK_IMPORTED_MODULE_1__["getTaskAssigneeState"], getTaskNotes, _state__WEBPACK_IMPORTED_MODULE_1__["getTaskStatusState"], function (jobs, tasks, assignees, notes, statuses) {
    var objects = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](tasks, function (task) {
        var foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](assignees, ['task', task.id]);
        return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, task, {
            _job: lodash__WEBPACK_IMPORTED_MODULE_0__["find"](jobs, ['id', task.job]),
            _assignees: foundAssignees,
            _notes: lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](notes, ['task', task.id]),
            _status: lodash__WEBPACK_IMPORTED_MODULE_0__["find"](statuses, ['id', task.status]),
            _allocated_hours: lodash__WEBPACK_IMPORTED_MODULE_0__["sumBy"](foundAssignees, function (a) { return +a.allocated_hours; }).toFixed(2)
        });
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](objects, ['order'], ['asc']);
});
var getTaskCollectionById = function (id) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTaskCollection, function (tasks) { return lodash__WEBPACK_IMPORTED_MODULE_0__["find"](tasks, ['id', id]); }); };
var getTaskAssigneeCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["getTaskAssigneeState"], getTaskCollection, function (assignees, tasks) {
    var objects = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](assignees, function (assignee) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, assignee, {
            _task: lodash__WEBPACK_IMPORTED_MODULE_0__["find"](tasks, ['id', assignee.task])
        });
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](objects, ['order'], ['asc']);
});


/***/ }),

/***/ "./src/app/state/selectors/taskboard.ts":
/*!**********************************************!*\
  !*** ./src/app/state/selectors/taskboard.ts ***!
  \**********************************************/
/*! exports provided: getTaskAssigneesForTaskboard, getStatsForTaskboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskAssigneesForTaskboard", function() { return getTaskAssigneesForTaskboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatsForTaskboard", function() { return getStatsForTaskboard; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../state */ "./src/app/state/state.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/app/state/selectors/task.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var getTaskAssigneesForTaskboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["getFilterState"], _state__WEBPACK_IMPORTED_MODULE_1__["getTaskStatusState"], _task__WEBPACK_IMPORTED_MODULE_2__["getTaskAssigneeCollection"], function (filters, statuses, assignees) { return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](statuses, function (status) {
    var foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](assignees, ['_task.status', status.id]);
    if (filters.user) {
        foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundAssignees, ['user', filters.user]);
    }
    if (filters.client) {
        foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundAssignees, ['_task._job.client', filters.client]);
    }
    if (filters.job) {
        foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundAssignees, ['_task.job', filters.job]);
    }
    if (filters.overdue === true) {
        foundAssignees = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundAssignees, ['_task.is_overdue', filters.overdue]);
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, status, {
        _assignees: foundAssignees
    });
}); });
var getStatsForTaskboard = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["getFilterState"], _task__WEBPACK_IMPORTED_MODULE_2__["getTaskCollection"], function (filters, tasks) {
    var foundTasks = tasks;
    if (filters.user) {
        foundTasks = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundTasks, { _assignees: [{ 'user': filters.user }] });
    }
    if (filters.client) {
        foundTasks = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundTasks, ['_job.client', filters.client]);
    }
    if (filters.job) {
        foundTasks = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundTasks, ['job', filters.job]);
    }
    if (filters.overdue === true) {
        foundTasks = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundTasks, ['is_overdue', filters.overdue]);
    }
    return {
        count_of_tasks: foundTasks.length,
        allocated_hours: lodash__WEBPACK_IMPORTED_MODULE_0__["sumBy"](foundTasks, function (t) { return +t.allocated_hours; }).toFixed(2),
        count_of_overdue: lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](foundTasks, function (t) { return t.is_overdue; }).length
    };
});


/***/ }),

/***/ "./src/app/state/selectors/user.ts":
/*!*****************************************!*\
  !*** ./src/app/state/selectors/user.ts ***!
  \*****************************************/
/*! exports provided: getUserById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/app/state/state.ts");



var getUserById = function (id) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_state__WEBPACK_IMPORTED_MODULE_2__["getUserState"], function (users) { return lodash__WEBPACK_IMPORTED_MODULE_0__["find"](users, ['id', id]); }); };


/***/ }),

/***/ "./src/app/state/state.ts":
/*!********************************!*\
  !*** ./src/app/state/state.ts ***!
  \********************************/
/*! exports provided: reducers, getClientState, getFilterState, getJobState, getMeState, getTaskState, getTaskAssigneeState, getTaskNoteState, getTaskStatusState, getUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientState", function() { return getClientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterState", function() { return getFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobState", function() { return getJobState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeState", function() { return getMeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskState", function() { return getTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskAssigneeState", function() { return getTaskAssigneeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskNoteState", function() { return getTaskNoteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskStatusState", function() { return getTaskStatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony import */ var _reducers_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/client */ "./src/app/state/reducers/client.ts");
/* harmony import */ var _reducers_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/filter */ "./src/app/state/reducers/filter.ts");
/* harmony import */ var _reducers_job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/job */ "./src/app/state/reducers/job.ts");
/* harmony import */ var _reducers_me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/me */ "./src/app/state/reducers/me.ts");
/* harmony import */ var _reducers_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/task */ "./src/app/state/reducers/task.ts");
/* harmony import */ var _reducers_taskassignee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/taskassignee */ "./src/app/state/reducers/taskassignee.ts");
/* harmony import */ var _reducers_tasknote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/tasknote */ "./src/app/state/reducers/tasknote.ts");
/* harmony import */ var _reducers_taskstatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/taskstatus */ "./src/app/state/reducers/taskstatus.ts");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/user */ "./src/app/state/reducers/user.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");










var reducers = {
    clients: _reducers_client__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    filters: _reducers_filter__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    jobs: _reducers_job__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    me: _reducers_me__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    tasks: _reducers_task__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    task_assignees: _reducers_taskassignee__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    task_notes: _reducers_tasknote__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    task_statuses: _reducers_taskstatus__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    users: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["reducer"]
};
var getClientState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('clients');
var getFilterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('filters');
var getJobState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('jobs');
var getMeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('me');
var getTaskState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('tasks');
var getTaskAssigneeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('task_assignees');
var getTaskNoteState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('task_notes');
var getTaskStatusState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('task_statuses');
var getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["createFeatureSelector"])('users');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stuart/ENV/task_management/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map