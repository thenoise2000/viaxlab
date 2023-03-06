import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/header/header.component';
import { ActivitiesComponent } from './components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateActivityComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HeaderComponent,
    ActivitiesComponent,
    CreateActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DndModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
