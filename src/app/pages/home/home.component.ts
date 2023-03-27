import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  todos : ITodo[] = [];

  constructor(private todoItemService: TodoItemService,
    private router: Router,
    private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.getTodos();
  }

getNonDoneItems(todoList: ITodo[]){
  const foundTodos = todoList.filter((todo) => todo.doneDate === null);
  return foundTodos;
}

  getTodos(){
    this.todoItemService.getTodos().subscribe((todos) => {
      this.todos = this.getNonDoneItems(todos);
      this.cdr.detectChanges();
  });
  }

  createTask(){
    this.router.navigate(['/ajout-tache'])
  }
}
