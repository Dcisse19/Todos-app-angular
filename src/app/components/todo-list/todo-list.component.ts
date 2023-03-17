import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'todos-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos! : ITodo[];

  constructor(private todoItemService: TodoItemService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoItemService.getTodos().subscribe((todos) => this.todos = todos);
  }
}
