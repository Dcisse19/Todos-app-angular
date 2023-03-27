import { ChangeDetectorRef, Component } from '@angular/core';
import { ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  todos : ITodo[] = [];

  constructor(private todoItemService: TodoItemService,
    private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoItemService.getTodosByDoneDate().subscribe((todos) => {
      this.cdr.detectChanges();
      this.todos = todos;
  });
  }
}
