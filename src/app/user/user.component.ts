import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';


 const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
 console.log('Hello',randomIndex);
 //  type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex]);

// imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)
// // get imagePath() {
// //   return 'assets/users/' + this.selectedUser.avatar
// // }

// onSelectUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.selectedUser.set(DUMMY_USERS[randomIndex]);
// }


// decoder without signal start
// @Input({required: true}) avatar!: string ;
// @Input({required: true}) name!: string ;

// get imagePath() {
//   return 'assets/users/' + this.avatar
// }

// decoder without signal End


// input function and using signal
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(()=> { return 'assets/users/' + this.avatar()})
// input function and using signal


// decoder without signal start
// @Input({required: true}) id!: string
// @Input({required: true}) avatar!: string ;
// @Input({required: true}) name!: string ;


@Input({required: true}) user!: User ;
@Input({required: true}) selected!: boolean ;

// decoder without signal End
@Output() select = new EventEmitter<string>();

// select = output<string>();

get imagePath() {
  return 'assets/users/' + this.user.avatar
}




onSelectUser() {
this.select.emit(this.user.id);
}

}
