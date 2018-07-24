import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() i: number;

  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle(){
    this.toggle.emit(this.todo);
  }

  onDelete(){
    this.delete.emit(this.todo);
  }
}
