import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  title: string = '';
  desc: string = '';

  @Output() create: EventEmitter<object> = new EventEmitter()

  onSubmit(){
    this.create.emit({ title: this.title, desc: this.desc });
  }

}
