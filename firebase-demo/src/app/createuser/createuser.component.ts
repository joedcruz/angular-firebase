import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
})
export class CreateuserComponent implements OnInit{

  formGroup: FormGroup;
  // titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder, private _userdataService: UserDataService,
    public dialogRef: MatDialogRef<CreateuserComponent>, private auth: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': [null],
      'password': [null],
      'location': [null]
    });
  }

  onSubmit(post) {
    console.log(post);
    // this._userdataService.addUser(post);
    // this.auth.emailSignUp(this.formGroup.value['email'], this.formGroup.value['password']);
    // this.auth.emailSignUp(this.formGroup.value['email'], this.formGroup.value['password'], post);
    this.auth.emailSignUp(post);
    this.dialogRef.close();
  }
}