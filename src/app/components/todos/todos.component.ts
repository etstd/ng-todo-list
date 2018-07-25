import { Component, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService:TodoService){ 
    this.todos = [];
  }

  ngOnInit(){
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  create(title: string){
    this.todoService.createTodo(title).subscribe(todo => this.todos.push(todo));
  }

  toggle( todo: Todo ){
    this.todoService.toggleTodo(todo).subscribe(res => (
      todo.completed = !todo.completed
    ))
  };

  delete( todo: Todo ){
    this.todoService.deleteTodo(todo).subscribe(res => {
      const i = this.todos.indexOf(todo);
            
      if( ~i ){
        this.todos.splice(i, 1)
      }
    })
  };

}

