import {Component ,OnInit} from '@angular/core';
import {Todo} from "../../Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string = '';
  todos: Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos") || '';
  if (this.localItem === null) {
    this.todos = [];
  } else {
    try {
      this.todos = JSON.parse(this.localItem);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      this.todos = []; // Set a default value in case of parsing error
    }
  }  
  }

  ngOnInit(): void {
      
  }
  deleteTodo(todo: Todo)
  {
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index , 1)
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }


  addTodoFromEvent(todo: Todo) {
    this.addTodo(todo);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  addTodo(todo: Todo)
  {
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }
  
}
  