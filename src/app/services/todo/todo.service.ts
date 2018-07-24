import { Injectable } from '@angular/core';

import { todos } from '../../shared/data';
import { Todo } from '../../shared/todo';

export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos
  }

  createTodo( title:string ){
    this.todos.unshift(new Todo(title))
  }
  
  deleteTodo( todo:Todo ){
    const i = this.todos.indexOf(todo);
    
    if( ~i ){
      this.todos.splice(i, 1)
    }
  }

  toggleTodo( todo:Todo ){
    todo.completed = !todo.completed;
  }

}
