import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { CATEGORIES, ICategory, ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'todos-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  categories: ICategory[] = CATEGORIES;
  private urgency!: boolean;
  taskForm!: FormGroup;
  taskCategory!: ICategory;
  todoItem!: ITodo;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoItemService,
    private router : Router
  ) {}
  ngOnInit() {
    this.initTaskForm();
  }
  initTaskForm() {
    this.taskForm = this.formBuilder.group({
      category: [null],
      content: [null],
      isUrgent: [null],
    });
  }
  addTaskForm() {
    this.taskForm.value.isUrgent === null ? this.urgency = false : this.urgency = true;
    this.todoItem = {
      content: this.taskForm.value.content.trim(),
      categoryId: +this.taskForm.value.category,
      isUrgent: this.urgency,
      doneDate: null,
    };
    this.todoService.addTodoItem(this.todoItem).subscribe((todo) => console.log('item to add : ',todo));
    this.router.navigate(['/']);
  }
}
