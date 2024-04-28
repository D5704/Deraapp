import { Component } from '@angular/core';
import { Todo } from '../dera/models/todo';

@Component({
  selector: 'app-dera',
  templateUrl: './dera.component.html',
  styleUrl: './dera.component.css'
})
export class DeraComponent {

  title = '';
  comment = '';

  //initialisation de la liste

  todos: Todo[] = []

  onSubmit(){
    console.log(`Le nom de ma tache est : ${this.title}`);
    console.log(`Le contenu de ma tache est : ${this.comment}`);

    const todo = new Todo(this.todos.length+1, this.title!, this.comment!, true);
    this.todos.push(todo);
  }

  close(id:number){
    let todo =this.todos.filter(item => item.id == id)[0];
    const index =this.todos.indexOf(todo);
    todo.enabled = false;
    this.todos[index] = todo;
  }
}
