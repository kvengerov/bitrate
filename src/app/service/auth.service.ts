import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { error } from 'util';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}


@Injectable()
export class AuthService {
  public user: Observable<User>;
  private userDetails: any;

  constructor(
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _router: Router
  ) {
    this.user = this._afAuth.authState.switchMap(user => {
      if (user) {
        return this._afs.doc<User>('user/${user.uid}').valueChanges();
      } else {
        return Observable.of(null);
      }
    });
    // this.user.subscribe(user => {
    //   if (user) {
    //     this.userDetails = user;
    //     console.log(this.userDetails);
    //   } else {
    //     this.userDetails = null;
    //   }
    // });
  }

  loginWithGoogle(): Observable<any> {
    return Observable.fromPromise(
      this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  loginWithFacebook(): Observable<any> {
    return Observable.fromPromise(
      this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    );
  }

  // login(email: string, password: string){
  //   return this._afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then(() => console.log('You have succesfully logged in'))
  //     .catch(error => console.log(error.message));
  // }

  login(email, password): Observable<any> {
    return Observable.fromPromise(
      this._afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('You have succesfully logged in'))
        .catch(error => console.log(error.message))
    );
  }

  isAuthentificates(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }

  logout() {
    return this._afAuth.auth.signOut()
      .then(() => {
        this._router.navigate(['/']);
      });
  }

  getUser() {
    return {
      name: this.userDetails.displayName,
      email: this.userDetails.email
    };
  }

}
