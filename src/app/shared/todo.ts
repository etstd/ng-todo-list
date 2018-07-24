import { todos } from './data';

let id:number = todos.length;

export class Todo {
  public id: number;

  constructor( public title: string, public completed: boolean = false ){
    this.id = id+=1;
  }
}