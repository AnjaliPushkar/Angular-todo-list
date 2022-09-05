import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddTodoComponent,
    TodoItemComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
