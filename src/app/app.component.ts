import { Component } from '@angular/core';
// import { HeaderComponent } from "./header/header.component";
// import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
// import { TasksComponent } from './tasks/tasks.component';
// need to import for Legacy project
// import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  // standalone: true,
  // need to import for Legacy project NgFor, NgIf
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string ;

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedId)!;
  }
  onSelectUser(id:string) {
    this.selectedId = id;
  }
}
