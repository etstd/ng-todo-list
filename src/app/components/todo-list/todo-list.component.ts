import { Component, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService:TodoService){ 
    this.todos = [];
  }

  ngOnInit(){
    this.todos = this.todoService.getTodos();
  }

  toggle( todo: Todo ){
    this.todoService.toggleTodo(todo)
  };

  delete( todo: Todo ){
    this.todoService.deleteTodo(todo)
  };

}
