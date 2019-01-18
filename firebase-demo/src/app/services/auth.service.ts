import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './../Interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';



@Injectable(
  // {providedIn: 'root'}
)
export class AuthService {

  // user: Observable<User | null>;
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
      this.user = afAuth.authState;

      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails + ' from auth service constructor');
          }
          else {
            this.userDetails = null;
          }
        }
      )

      // this.user = this.afAuth.authState.pipe(
      //   switchMap(user => {
      //     if(user) {
      //       this.userDetails = user;
      //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      //     } else {
      //       this.userDetails = null;
      //       return of(null);
      //     }
      //   })
      // );
    }

    //// Email/password Auth ////

    // emailSignUp(email: string, password: string) {
    // emailSignUp(email: string, password: string, formData: User) {
    emailSignUp(formData: any) {
      return this.afAuth.auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      // .createUserWithEmailAndPassword(user.email, user.password)
      .then(credential => {
        console.log("Welcome new user " + credential.user);
        // return this.updateUserData(credential.user); // if using firestore
        return this.updateUserData(credential.user, formData); // if using firestore
      })
      .catch(error => this.handleError(error));
    }

    emailLogin(email: string, password: string) {
    // emailLogin(formData: any) {
      const credential = firebase.auth.EmailAuthProvider.credential(
        email, password);

      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
      // .then(cred => {
      //   console.log("Welcome back " + cred.user);
      // })
      //   .catch(error => this.handleError(error));
        //.catch(error => this.handleError(error));
      
      // return this.afAuth.auth
      // .signInWithEmailAndPassword(formData.email, formData.password)
      // .then(credential => {
      //   console.log("Welcome back " + credential.user);
      //   // return this.isLoggedIn();
      //   // return this.updateUserData(credential.user);
      // })
      // .catch(error => this.handleError(error));
    }

    /// Sends email allowing user to reset password
    resetPassword(email:string) {
      const fbAuth = auth();

      return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => console.log("Password update email sent"))
      .catch(error => this.handleError(error));
    }

    isLoggedIn() {
      if (this.userDetails == null) {
        return false;
      } else {
        return true;
      }
    }

    signOut() {
      this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
      });
    }

    /// Sets user data to firestore after successful login
    // private updateUserData(user: User) {
    // private updateUserData(user: User, formData: any) {
    private updateUserData(user: any, formData: any) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(
        `users/${user.uid}`
      );

      const data: User = {
        uid: user.uid,
        email: user.email || null,
        // displayName: user.displayName || 'nameless user',
        // photoUrl: user.photoUrl || 'https://goo.gl/Fz9nrQ'
        location: formData.location || null,
        roles: { 
          subscriber: true
        }
      };
      return userRef.set(data);
    }

    /// If error, console log
    private handleError(error: Error) {
      console.error(error);
      console.log(error);
    }

    ///// Role-based Authorization //////

    canRead(user: User): boolean {
      const allowed = ['admin', 'editor', 'subscriber']
      return this.checkAuthorization(user, allowed)
    }

    canEdit(user: User): boolean {
      const allowed = ['admin', 'editor']
      return this.checkAuthorization(user, allowed)
    }

    canDelete(user: User): boolean {
      const allowed = ['admin']
      return this.checkAuthorization(user, allowed)
    }

    // determines if user has matching role
    private checkAuthorization(user: User, allowedRoles: string[]): boolean {
      if (!user) return false
      for (const role of allowedRoles) {
        if ( user.roles[role] ) {
          return true
        }
      }
      return false
    }

  // private _loginUrl = "http://localhost:5000/api/login";


  //constructor(private http: HttpClient) { }

  // loginUser(user) {
  //   var reqHeader = new HttpHeaders({
  //     'Content-Type':'application/json'
  //   });
  //   return this.http.post<any>(this._loginUrl, user, {headers: reqHeader});
  // }

  // loggedIn() {
  //   return !!localStorage.getItem('token');
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // login(username: string, password: string) {
  //   return this.http.post<any>(`$http://localhost:5000/api/login`, { username: username, password: password })
  //     .pipe(map(user => {
  //         // login successful if there's a jwt token in the response
  //         if (user && user.token) {
  //             // store user details and jwt token in local storage to keep user logged in between page refreshes
  //             localStorage.setItem('currentUser', JSON.stringify(user));
  //         }

  //         return user;
  //     }));
  // }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  // }


}
