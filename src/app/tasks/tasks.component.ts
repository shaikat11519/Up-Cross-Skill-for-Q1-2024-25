import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) userId!: string;
@Input({required: true}) name!: string;

isAddingTask= false;

// private tasksService: TasksService;

// Dependency injection start
constructor (private tasksService: TasksService){}
// Dependency injection End

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onStartAddTask(){
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}

}
