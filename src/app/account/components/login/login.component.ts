import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName!: FormControl;
  password!: FormControl;

  constructor(private authService: AuthService,private router: Router, public afs: AngularFirestore, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }
   // Sign in with email/password
   SignIn(email: string, password: string) {

    console.log("this is my console log")
    console.log(email, password)
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert(result.user);
        this.authService.login();
        this.router.navigateByUrl('home');
        //this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigateByUrl('home');
          }
        });
      })
      .catch((error) => {
        // window.alert(error.message);
        window.alert(email);

      });
  }
  // Sign up with email/password
  
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('home');
  }
}
