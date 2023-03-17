import { Component, Input } from '@angular/core';
import { CATEGORIES, ICategory } from 'src/app/mocks/todos.mock';

@Component({
  selector: 'todos-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent {
  // @Input() category!: ICategory[];
  category:ICategory = CATEGORIES[0];

}
