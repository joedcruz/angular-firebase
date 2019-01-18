import { UserDataService } from './../services/userdata.service';
import { UserData } from './../Interfaces/userdata';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder, private _userdataService: UserDataService, @Inject(MAT_DIALOG_DATA) public data: UserData,
    public dialogRef: MatDialogRef<UpdateuserComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      // 'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'id': [null],
      'userId': [null],
      'username': [null],
      'email': [null],
      //'email': [null, [Validators.required, this.getErrorEmail]],
      // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      // 'validate': ''
    });
  }

  // get MobileNo() {
  //   return this.formGroup.get('MobileNo') as FormControl
  // }

  // getErrorEmail() {
    // return this.formGroup.get('email').hasError('required') ? 'Field is required' : ''
      // this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' : '';
        //this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
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
    // this.post = post;
    console.log(post);
    this._userdataService.updateUser(post);
    // this._userdataService.updateUser(post).subscribe(
    //   res => {
    //     console.log(res)          
    //   },
    //   err => console.log(err) 
    // );

    this.dialogRef.close();

  }

}
