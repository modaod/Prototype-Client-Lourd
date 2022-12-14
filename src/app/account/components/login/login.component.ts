import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName!: FormControl;
  password!: FormControl;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  onLogin() {
    this.router.navigateByUrl('home');
  }
}
