import { Component } from '@angular/core'
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Finish Angular tutorial', completed: false }
  ];

  newTodoText: string = '';

  addTodo() {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: this.newTodoText,
      completed: false
    };
    this.todos.push(newTodo);
    this.newTodoText = '';
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
