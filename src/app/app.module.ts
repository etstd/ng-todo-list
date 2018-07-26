import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data.service';


import { AppComponent } from './components/app/app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { TodoService } from './services/todo/todo.service';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { ButtonAddTaskComponent } from './components/button-add-task/button-add-task.component';

@NgModule({
  declarations: [
    AppComponent, TodoFormComponent, TodoListComponent, TodoItemComponent, TodosComponent, HeaderComponent, TodoViewComponent, ButtonAddTaskComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, //HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
