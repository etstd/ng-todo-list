import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, } from '@angular/common/http';


import { from, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators/';

import { Todo } from '../../shared/todo';


@Injectable()
export class TodoService {
  private apiUrl: string = 'api/todos';

  constructor(private http: HttpClient){}

  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handlerError)
    )
  }

  createTodo( title:string ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options = { headers },
          todo    = new Todo(title);


    return this.http.post(this.apiUrl, todo, options).pipe(
      catchError(this.handlerError)
    )
  }
  
  deleteTodo( todo:Todo ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options = { headers };

    return this.http.delete(`${this.apiUrl}/${todo.id}`, options).pipe(
      catchError(this.handlerError)
    );

  }

  toggleTodo( todo:Todo ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options = { headers };

    return this.http.put(`${this.apiUrl}/${todo.id}`, todo, options).pipe(
      catchError(this.handlerError)
    )
  }

  private handlerError(error: any){
    console.error( error );

    return throwError(error);
  }
}
