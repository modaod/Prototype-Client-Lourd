import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  messageArray = [
    {
      user: 'john',
      message: 'Salut'
    },
    {
      user: 'Stone',
      message: 'What\'s up man'
    }
  ];
  messageText: any;
  user: any;
  room: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    var messagesRef = firebase.database().ref('messages/');
    messagesRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
  }

  sendMessage() {
    return false;
  }

  join() {

  }

  leave() {
    console.log("in leave")
    this.userService.setUser(null)

    
  }

  onLeave() {

  }
}
