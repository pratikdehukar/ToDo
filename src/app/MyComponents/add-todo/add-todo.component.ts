import { Component , OnInit , EventEmitter , Output } from '@angular/core';
import { Todo } from 'src/app/Todos';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  title!:string;
  desc!:string;

  titleInvalid: boolean = false;
  descInvalid: boolean = false; 

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit(): void {
    
  }
  
  onSubmit(){
    
    this.titleInvalid = this.title.trim() === '';
    this.descInvalid = this.desc.trim() === '';

    if (!this.titleInvalid && !this.descInvalid) {
      const todo = {
        title:this.title,
        desc:this.desc,
        active:true
      }
      this.addTodo.emit(todo);
      console.log('Item added successfully:', this.title, this.desc);
      // Clear the form fields
      this.title = '';
      this.desc = '';
      this.titleInvalid = false;
      this.descInvalid = false;
    }
    
  }
}



