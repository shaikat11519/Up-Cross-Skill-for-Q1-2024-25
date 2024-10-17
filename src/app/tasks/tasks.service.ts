import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService{
  private tasks = [
    {
      id: 't1',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-01-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-09-30'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-03-11'
    },

    {
      id: 't4',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-11-02'
    },

    {
      id: 't5',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-12-31'
    },

    {
      id: 't6',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-12-31'
    },
    {
      id: 't7',
      userId: 'u5',
      title: 'Master Angular',
      summary: 'Learn all the basic ',
      dueDate: '2024-12-31'
    },

  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }


  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId)
  }

  addTask(taskData: NewTaskData, userId: string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
