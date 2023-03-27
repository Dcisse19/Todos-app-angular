import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private todoItemService: TodoItemService,
    private router: Router) {}
  ngOnInit(): void {
    this.getItemCategory();
  }
  getItemCategory() {
    this.todoItemService
      .getTodoItemCategory(this.item)
      .subscribe((category) =>
        {this.category = category!
        // console.log(this.category)
      });
  }

  archiveItem(){
    const currentDate = new Date();
    if(this.item.doneDate === null){
      this.item.doneDate = currentDate;
      this.todoItemService.updateTodoItem(this.item).subscribe((item) => this.router.navigate(['/historique']))
    } else {
      this.item.doneDate = null;
      this.todoItemService.updateTodoItem(this.item).subscribe((item) => this.router.navigate(['/']))
    }
  }
}
