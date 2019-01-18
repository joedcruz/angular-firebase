import { UserData } from './../Interfaces/userdata';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder, private _userdataService: UserDataService, @Inject(MAT_DIALOG_DATA) public data: UserData,
    public dialogRef: MatDialogRef<DeleteuserComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'id': [null],
      'userId': [null],
      'username': [null],
      'email': [null]
    });
  }
  
  onSubmit(post) {
    console.log(post);
    this._userdataService.deleteUser(post);
    this.dialogRef.close();
  }
}
