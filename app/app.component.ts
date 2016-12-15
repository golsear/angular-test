import { Component } from '@angular/core';

const todos = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title: 'Изучить Angular 2',
        completed: false
    },
    {
        title: 'Написать приложение',
        completed: false
    }
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;

    toggle(todo: any) {
        //console.log('toggle', todo);
        todo.completed = !todo.completed;
    }

    delete(todo: any) {
        let index = this.todos.indexOf(todo);
        console.log(index);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}