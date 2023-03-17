import { Injectable } from '@angular/core';
import { CATEGORIES, ICategory, ITodo, TODOS } from 'src/app/mocks/todos.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  constructor() {}

  getTodos(): Observable<ITodo[]> {
    const todos = of(TODOS);
    return todos;
  }

  getTodoItemCategory(item: ITodo): Observable<ICategory | undefined> {
    const category = CATEGORIES.find((category) => category.id === item.categoryId);
    return of(category);
  }
}
