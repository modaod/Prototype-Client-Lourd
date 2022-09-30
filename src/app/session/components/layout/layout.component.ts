import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Router} from "@angular/router";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  messageArray = Array();

  messageText: any;

  user: any;
  room: any;

  constructor(private userService: UserService, public db: AngularFireDatabase, private router: Router) {

  }

  snapshotToArray = (snapshot: any) => {
    let returnArr = Array();
    snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      //item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  ngOnInit(): void {
    var messagesRef = this.db.database.ref('messages/');

    messagesRef.on('value', (data) => {
      this.messageArray = this.snapshotToArray(data);
    });

    messagesRef.on('child_changed', (data) => {
      this.messageArray = this.snapshotToArray(data);
    });
  }


  sendMessage() {
    if(this.messageText) {
      var messagesRef = this.db.database.ref('messages/');
      var newMessagesRef = messagesRef.push();
      console.log(this.userService.user);
      newMessagesRef.set({
        name: this.userService.user?.displayName?.toString() || "failedUsername",
        text: this.messageText.toString()
      });
    }
    this.messageText = '';
  }

  join() {

  }

  leave() {
    console.log("in leave")
    this.userService.logOut()
    this.router.navigateByUrl('auth');

  }

  onLeave() {

  }
}
