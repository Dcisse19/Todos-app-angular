import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEmojisModule } from 'angular-emojis';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent,
    TodoListComponent,
    CategoryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmojisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
