import { UserData } from './../Interfaces/userdata';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  // titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder, 
              private auth: AuthService, 
              private _router: Router,
              public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': [null],
      'password': [null],
     });
  }

  // get MobileNo() {
  //   return this.formGroup.get('MobileNo') as FormControl
  // }

  // checkPassword(control) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('Password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('Password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }

  onSubmit(post) {    
    console.log(post);
    //this.auth.emailLogin(post)
    this.auth.emailLogin(this.formGroup.value['email'], this.formGroup.value['password'])
      .then((res) => {
        this._router.navigate(['/sidenav/dashboard']);
      })
      .catch((err) => { 
        console.log(err);
        this.snackbar.open(err) 
      }); 
      
    // this._auth.loginUser(post)
    //   .subscribe(
    //     res => {
    //       console.log(res)          
    //       localStorage.setItem('userId', res.userId)
    //       localStorage.setItem('token', res.token)
    //       localStorage.setItem('username', post.MobileNo)
    //       this._router.navigate(['/sidenav/dashboard'])
    //     },
    //     err => console.log(err)
    //   )

    // if(this.auth.isLoggedIn() == true) {
    //   console.log("true" + this.auth.isLoggedIn())
    //   this._router.navigate(['/sidenav/dashboard']);
    // } else {
    //   console.log("false" + this.auth.isLoggedIn())
    //   this._router.navigate(['/']);
    // }
    
  }

}
