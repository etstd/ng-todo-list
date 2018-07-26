import { Component, Input } from '@angular/core';

import { Todo } from '../../shared/todo';


@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent {
  @Input() todo: Todo = null;

  // title: string = "very very very very very long todo title";

  description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum quo dolore earum tenetur quisquam! Beatae, minima nesciunt. Recusandae esse omnis ea earum doloremque doloribus cupiditate, at enim corporis tempora.";
}
