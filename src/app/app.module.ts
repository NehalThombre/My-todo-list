import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule


  ],
  providers: [TodoService,Router, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
