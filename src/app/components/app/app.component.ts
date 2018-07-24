import { Component } from '@angular/core';

class Todo { 
  constructor( public title: string, public completed: boolean = false ){ }
}

const todos:Todo[] = [
  {
    completed: false,
    title: "todo title"
  },
  
  {
    completed: true,
    title: "todo title"
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string  = 'todo list';
  todos:Todo[] = todos;
  newTodoTitle: string = '';

  toggle( todo: Todo ){
    todo.completed = !todo.completed;
  };

  delete( todo: Todo ){
    const i = this.todos.indexOf(todo);
    
    if( ~i ){
      this.todos.splice(i, 1)
    }
  };

  create(  ){
    this.todos.unshift(new Todo(this.newTodoTitle));

    this.newTodoTitle = '';
  }

}
