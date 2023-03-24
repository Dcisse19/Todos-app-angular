import { Component } from '@angular/core';
import { TodoItemService } from './services/todo-item/todo-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-app';
  constructor(private todoService: TodoItemService){}

  ngOnInit(){
    this.todoService.getTodos();
  }
}
