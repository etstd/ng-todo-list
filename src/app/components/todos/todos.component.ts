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
  todo: Todo;
  isOpenPageAddTask: boolean;
  
  constructor(private todoService:TodoService){ 
    this.todos = [];
  }

  ngOnInit(){
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  openTaskAddPage(){
    if( this.todo ){
      this.todo = null;
    };

    this.isOpenPageAddTask = true;
  }

  create({ title, desc }: { title:string, desc:string } ){
    this.todoService.createTodo(title, desc).subscribe(todo => this.todos.unshift(todo));
  }

  toggle( todo: Todo ){
    this.todoService.toggleTodo(todo).subscribe(res => (
      todo.completed = !todo.completed
    ))
  };

  delete( todo: Todo ){
    this.todoService.deleteTodo(todo).subscribe(res => {
      if( this.todo && this.todo.id === todo.id ){
        this.todo = null;
      };

      const i = this.todos.indexOf(todo);
            
      if( ~i ){
        this.todos.splice(i, 1)
      }
    })
  };

  onSelect( todo: Todo ){
    this.isOpenPageAddTask = false;
    this.todo = todo;
  }
}

