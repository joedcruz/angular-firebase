import { UserData } from './../Interfaces/userdata';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder, private _userdataService: UserDataService, @Inject(MAT_DIALOG_DATA) public data: UserData,
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
      // 'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      // 'userId': [null, Validators.required],
      'MobileNo': [null, Validators.nullValidator],
      // 'email': [null, [Validators.required]]
      //'email': [null, [Validators.required, this.getErrorEmail]],
      // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      // 'validate': ''
    });
  }

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
