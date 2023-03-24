import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor } from '@angular/forms';
import { CATEGORIES, ICategory, ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';

@Component({
  selector: 'todos-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  categories: ICategory[] = CATEGORIES;
  isUrgent: boolean = false;

  taskForm!: FormGroup;
  taskCategory!: ICategory;
  todoItem!: ITodo;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoItemService
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
    this.todoItem = {
      content: this.taskForm.value.content.trim(),
      categoryId: this.taskForm.value.category,
      isUrgent: this.taskForm.value.isUrgent,
      doneDate: null,
    };
    this.todoService.addTodoItem(this.todoItem);
    this.todoService.getTodos();
  }
}
