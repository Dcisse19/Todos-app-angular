import { Component, Input, OnInit } from '@angular/core';
import { ICategory, ITodo, TODOS } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'todos-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item!: ITodo;
  category!: ICategory;
  icon = "shopping_trolley";

  constructor(private todoItemService: TodoItemService) {}
  ngOnInit(): void {
    this.getItemCategory();
  }
  getItemCategory() {
    this.todoItemService
      .getTodoItemCategory(this.item)
      .subscribe((category) =>
        {this.category = category!
        console.log(this.category)});
  }
}
