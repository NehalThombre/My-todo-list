import { Injectable } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(text: string, dueDate: Date): void {
    const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
    const newTodo: Todo = { id, text, completed: false,};
    this.todos.push(newTodo);
  }

  removeTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
