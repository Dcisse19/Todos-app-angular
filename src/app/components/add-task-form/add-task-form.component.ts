import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, ICategory, ITodo } from 'src/app/mocks/todos.mock';
import { TodoItemService } from 'src/app/services/todo-item/todo-item.service';
import { Location } from '@angular/common';

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
  selected!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.getItemById();
    this.initTaskForm();
  }

  initTaskForm() {
    const contentValue = this.todoItem ? this.todoItem.content : null;
    const categoryValue = this.todoItem ? this.todoItem.categoryId : null;
    const isUrgentValue = this.todoItem ? this.todoItem.isUrgent : null;

    this.taskForm = this.formBuilder.group({
      category: [categoryValue, [Validators.required]],
      content: [contentValue, [Validators.required]],
      isUrgent: [isUrgentValue, [Validators.required]],
    });
  }

  getItemById() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id !== 0) {
      this.todoService.getTodoById(id).subscribe((item) => {
        this.todoItem = item;
        this.initTaskForm();
      });
    }
  }

  getFormValues(){
    this.taskForm.value.isUrgent === null || this.taskForm.value.isUrgent === false
    ? (this.urgency = false)
    : (this.urgency = true);
    const setId = this.todoItem ? this.todoItem.id : undefined;
    this.todoItem = {
      id: setId,
      content: this.taskForm.value.content.trim(),
      categoryId: +this.taskForm.value.category,
      isUrgent: this.urgency,
      doneDate: null,
    };
  }
  validateForm() {
    if(this.todoItem){
      this.getFormValues();
      this.todoService.updateTodoItem(this.todoItem).subscribe(() => this.router.navigate(['/']))
    }
    else {
      this.getFormValues();
      this.todoService
        .addTodoItem(this.todoItem)
        .subscribe((todo) => console.log('item to add : ', todo));
      this.router.navigate(['/']);
    }
  }
}
