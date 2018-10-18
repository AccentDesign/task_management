import * as actions from './state/actions';

import { AppState, reducers } from './state/state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AutoResizeDirective } from './directives/auto-resize.directive';
import { AvatarComponent } from './components/avatar.component';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { TaskCardComponent } from './components/task-card.component';
import { TaskCreateFormComponent } from './components/task-create-form.component';
import { TaskFormComponent } from './components/task-form.component';
import { TaskboardComponent } from './components/task-board.component';
import { TaskboardFilterComponent } from './components/task-board-filter.component';
import { effects } from './state/effects';

@NgModule({
    declarations: [
        AppComponent,
        AutoResizeDirective,
        AvatarComponent,
        TaskboardComponent,
        TaskboardFilterComponent,
        TaskCardComponent,
        TaskCreateFormComponent,
        TaskFormComponent
    ],
    imports: [
        BrowserModule,
        EffectsModule.forRoot(effects),
        FormsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFTOKEN'
        }),
        NgxDnDModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private store: Store<AppState>) {
        store.dispatch({ type: actions.DataActions.LOAD_DATA });
    }

}
