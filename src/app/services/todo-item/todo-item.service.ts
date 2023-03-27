import { Injectable } from '@angular/core';
import { CATEGORIES, ICategory, ITodo, TODOS } from 'src/app/mocks/todos.mock';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) {}

  private todosUrl = 'http://localhost:3000/todos'; // Url pour accéder à l'API
  private categoriesUrl = 'http://localhost:3000/categories'; // Url pour accéder à l'API

  getTodos(): Observable<ITodo[]> {
    // this.http.get<ITodo[]>(this.todosUrl).subscribe((todo) => console.log(todo));
    return this.http.get<ITodo[]>(this.todosUrl)
    .pipe(
      catchError(this.handleError<ITodo[]>('getTodos', []))
    );
  }
  getTodosByDoneDate(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl+"?_sort=doneDate&_order=desc")
    .pipe(
      catchError(this.handleError<ITodo[]>('getTodos', []))
    );
  }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.categoriesUrl)
    .pipe(
      catchError(this.handleError<ICategory[]>('getCategories', []))
    );
  }
  getTodoItemCategory(item: ITodo): Observable<ICategory | undefined> {

    const foundCategory = CATEGORIES.find((c) => c.id === item.categoryId);
    return of(foundCategory);
    }

  getTodoById(id:number){
    // this.http.get<ITodo>(this.todosUrl+'/'+id).subscribe((item) => console.log(item));
    return this.http.get<ITodo>(this.todosUrl+'/'+id)
    .pipe(
      catchError(this.handleError<ITodo>('getTodos'))
    );
  }

  addTodoItem(todoItem: ITodo) : Observable<ITodo>{
    return this.http.post<ITodo>(this.todosUrl, todoItem, this.httpOptions)
    .pipe(catchError(this.handleError<ITodo>('addTodoItem')));
  }
  updateTodoItem(todoItem: ITodo){
    console.log('modify in service',todoItem);
    return this.http.put(this.todosUrl+'/'+todoItem.id, todoItem, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }


  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T>=> {
      console.log(`${operation} failed`);
      const resultError = of(result as T);
      resultError.subscribe((error) => console.log('erreur : ',error));
      return resultError;
    }
  }
}
