import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  currentUserEmail: string;
  authError: any;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginEmail(email: string, passwd: string) {
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth
      .signInWithEmailAndPassword(email, passwd)
      .then((value) => {
        console.log('Logado com email e senha');
        this.currentUserEmail = value.user.email;
      })
      .catch(function (error) {
        console.log(error.message);
        thisService.authError = error;
      });
  }

  loginGoogle() {
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((value) => {
        console.log('Logado com Google');
        this.currentUserEmail = value.user.email;
      })
      .catch(function (error) {
        console.log(error.message);
        thisService.authError = error;
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.currentUserEmail = null;
  }
}
