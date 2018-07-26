import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add-task',
  templateUrl: './button-add-task.component.html',
  styleUrls: ['./button-add-task.component.scss'],
})
export class ButtonAddTaskComponent {
  @Output() onOpenTaskAddPage = new EventEmitter();

  @HostListener('click', ['$event'])
  openTaskAddPage(){
    this.onOpenTaskAddPage.emit();
  }
}
