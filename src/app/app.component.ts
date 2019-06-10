import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;
  todoList: string[];
  constructor() {
    this.title = 'My todo App';
    this.todoList = ['practice angular', 'UI/Ux practice', 'React Native'];
  }

  deleteTodo(i) {
    this.todoList.splice(i, 1);
  }

  saveTodo(todo) {
    if(todo!=="" ){
      this.todoList.push(todo);
    }

  }
}
