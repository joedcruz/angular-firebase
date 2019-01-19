import { UserData } from './../Interfaces/userdata';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDataService } from '../services/userdata.service';
import { User } from './../interfaces/user';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
// import { map } from 'rxjs/operators';
// import { Roles } from './../interfaces/roles';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  // public roles: Roles[];

  constructor(private formBuilder: FormBuilder, 
              private _userdataService: UserDataService, 
              @Inject(MAT_DIALOG_DATA) public data: User,
              public dialogRef: MatDialogRef<UpdateroleComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      email: [null],
      subscriber: [null]
      // 'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      // 'userId': [null, Validators.required],
      //'email': [null],
      // roles: this.buildRoles()
      // 'email': [null, [Validators.required]]
      //'email': [null, [Validators.required, this.getErrorEmail]],
      // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      // 'validate': ''
    });
  }

  // get Roles() {
  //   return this.formGroup.get('roles');
  // }

  // buildRoles() {
  //   const arr = this.data.roles.map(role => {
  //     return this.formBuilder.control(role.selected);
  //   });
  //   return this.formBuilder.array(arr);
  // }

  onSubmit(post) {
    // this.post = post;
    console.log(post);
    //this._userdataService.updateUser(post);
    // this._userdataService.updateUser(post).subscribe(
    //   res => {
    //     console.log(res)          
    //   },
    //   err => console.log(err) 
    // );

    this.dialogRef.close();

  }

}
