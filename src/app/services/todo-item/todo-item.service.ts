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

  private todosUrl = 'api/todos'; // Url pour accéder à l'API
  private categoriesUrl = 'api/categories'; // Url pour accéder à l'API
  getTodos(): Observable<ITodo[]> {
    this.http.get<ITodo[]>(this.todosUrl).subscribe((todo) => console.log(todo));
    return this.http.get<ITodo[]>(this.todosUrl)
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

  // getTodoItemCategory(item: ITodo): Observable<ICategory | undefined> {
  //   this.getCategories().subscribe((category) => {
  //     return category.find((c) => c.id === item.categoryId);
  //   })
  // }

  addTodoItem(todoItem: ITodo) : Observable<ITodo>{
    console.log(todoItem);
    return this.http.post<ITodo>(this.todosUrl, todoItem, this.httpOptions)
    .pipe(catchError(this.handleError<ITodo>('addTodoItem')));
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
