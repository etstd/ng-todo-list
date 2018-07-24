import { Component } from '@angular/core';

import { Todo } from '../../shared/todo'
import { todos } from '../../shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string  = 'todo list'
}
