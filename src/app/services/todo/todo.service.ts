import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { from, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators/';

import { Todo } from '../../shared/todo';


@Injectable()
export class TodoService {
  private apiUrl: string = 'api/todos';

  constructor(private http: Http){}

  log( data ): any{
    console.log( data );
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.apiUrl).pipe(
      map(res => res.json()),
      catchError(this.handlerError)
    )
  }

  createTodo( title:string ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers }),
          todo    = new Todo(title);


    return this.http.post(this.apiUrl, todo, options).pipe(
      map(res => res.json() as Todo),
      catchError(this.handlerError)
    )
  }
  
  deleteTodo( todo:Todo ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers });

    return this.http.delete(`${this.apiUrl}/${todo.id}`, options).pipe(
      catchError(this.handlerError)
    );

  }

  toggleTodo( todo:Todo ){
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers });

    return this.http.put(`${this.apiUrl}/${todo.id}`, todo, options).pipe(
      catchError(this.handlerError)
    )
  }

  private handlerError(error: any){
    console.error( error );

    return throwError(error);
  }
}
