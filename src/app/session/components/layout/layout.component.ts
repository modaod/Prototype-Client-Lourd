import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    return false;
  }

  join() {

  }

  leave() {

  }

  onLeave() {

  }
}
