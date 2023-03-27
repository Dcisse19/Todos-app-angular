
import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'todos-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
@Input() todos! : ITodo[];

urgentExist : boolean = false;
otherExist : boolean = false;

ngOnInit(){
  this.isUrgentExist();
}

isUrgentExist(){
  const foundUrgent = this.todos.find((todo) => todo.isUrgent);
  if(foundUrgent){
    // console.log('urgent : ',foundUrgent)
    this.urgentExist = true;
  }
  const foundNonUrgent = this.todos.find((todo) => !todo.isUrgent);
  if(foundNonUrgent){
    // console.log('non urgent : ',foundNonUrgent);
    this.otherExist = true;
  }

}
}
