import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[];

  @Output() delete: EventEmitter<Todo> = new EventEmitter()
  @Output() toggle: EventEmitter<Todo> = new EventEmitter()


  onToggle( todo: Todo ){
    this.toggle.emit(todo);
  };
  
  onDelete( todo: Todo ){
    this.delete.emit(todo);
  };

}
