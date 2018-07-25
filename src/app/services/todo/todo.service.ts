import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { from } from 'rxjs';

import { Todo } from '../../shared/todo';


@Injectable()
export class TodoService {
  private apiUrl: string = 'api/todos';
  todos: Todo[];

  constructor(private http: Http){}

  log( data ): any{
    console.log( data );
  }

  getTodos(): Promise<Todo[]> {
    return from(this.http.get(this.apiUrl)).toPromise()
                                          .then(res => res.json())
                                          .then(todos => this.todos = todos)
                                          .catch(this.handlerError)
    // return this.http.get(this.apiUrl)
    //                 .toPromise()
    //                 .then(res => res.json())
    //                 .then(todos => this.todos = todos)
    //                 .catch(this.handlerError)
  }

  createTodo( title:string ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers }),
          todo    = new Todo(title);


    from(this.http.post(this.apiUrl, todo, options))
              .toPromise()
              .then(res => res.json())
              .then(todo => this.todos.push(todo))
              .catch(this.handlerError);
  }
  
  deleteTodo( todo:Todo ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers });

    from(this.http.delete(`${this.apiUrl}/${todo.id}`, options))
            .toPromise()
            .then(res => {
              const i = this.todos.indexOf(todo);
              
              if( ~i ){
                this.todos.splice(i, 1)
              }
            })
            .catch(this.handlerError);

  }

  toggleTodo( todo:Todo ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers });

    from(this.http.put(`${this.apiUrl}/${todo.id}`, todo, options))
            .toPromise()
            .then(res => {
              todo.completed = !todo.completed;
            })
            .catch(this.handlerError);
  }

  private handlerError(error: any){
    console.error( error );

    return Promise.reject(error);
  }
}
