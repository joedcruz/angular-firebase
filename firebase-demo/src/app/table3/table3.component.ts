import { AuthService } from './../services/auth.service';
import { CreateuserComponent } from '../createuser/createuser.component';
import { UserData } from './../Interfaces/userdata';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from './../services/userdata.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { UpdateroleComponent } from '../updaterole/updaterole.component';
import { User } from './../interfaces/user';
// import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // public userData = {} as UserData;
  // animal: string;
  name: string;
  usersList: UserData[];
  // user: any;
  
  //isPopupOpened = true;
  //dataSource = [];
  //dataSource = new MatTableDataSource<UserData>([]);
  displayedColumns = ['select', 'userId', 'email', 'location', 'roles', 'update', 'delete'];
  // listData = new MatTableDataSource;
  listData: MatTableDataSource<any>;

  selection = new SelectionModel<UserData>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listData.data.length;
    return numSelected === numRows;
  }

   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.listData.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  //constructor(private userdataService: UserDataService) { }
  constructor(public dialog: MatDialog, 
              private userdataService: UserDataService,
              private auth: AuthService) {
     this.listData = new MatTableDataSource([]); }

  ngOnInit() {

    // Subscribe to the current user to prevent unauthorized actions 
    // this.auth.user.subscribe(user => this.user = user)

    // this.userdataService.getUsers()
    //   .subscribe(data => {
    //     this.usersList = data.map(item => {
    //       return {
    //         id: item.payload.doc.id,
    //         ...item.payload.doc.data()
    //       } as UserData;
    //     })
    //   }); 

    /// while using this getUsers() the sorting is not working
    // this.userdataService.getUsers()
    //   .subscribe(data => {
    //     this.listData = new MatTableDataSource(data); 
    //     console.log(data);
    //   })

    /// updated the getUsers() to this format to make the sorting working
    this.userdataService.getUsers()
    .subscribe(data => {
      this.listData.data = data as UserData[]; 
      console.log(data);
    })

    this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
  }

  ngAfterViewInit() {  
    // this.userdataService.getUsers()
    //   .subscribe(data => {
    //     this.listData = new MatTableDataSource(data);
    //     console.log(data);
    //   })
    // this.userdataService.getUsers()
    // .subscribe(data => this.listData.data = data);
    // this.listData.paginator = this.paginator;
    // this.listData.sort = this.sort;
  }

  // Authorize users based on abilities/roles
  // editPost() {
  //   if(this.auth.canEdit(this.user)) {
  //     this.postRef.update({ title: 'Edited Title!'})
  //   } 
  //   else {
  //     console.error('you are not allowed to do that!')
  //   }  
  // }

  addUser(): void {
    const dialogRef = this.dialog.open(CreateuserComponent, {
      width: '500px',
      height: '500px',
      autoFocus: true
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The create user dialog was closed');
      //this.animal = result;
    });
  }

  updateUser(user): void {
    console.log(user);
    //this.userData = user;
    //var userData = {} as UserData;
    const dialogRef = this.dialog.open(UpdateuserComponent, {
      width: '500px',
      height: '500px',
      //autoFocus: true,
      data: {uid:user.uid, email: user.email, location: user.location}
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The update user dialog was closed');
      //this.animal = result;
    });
  }

  deleteUser(user): void {
    console.log(user);
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      width: '500px',
      height: '500px',
      //autoFocus: true,
      data: {id:user.id, userId: user.userId, username: user.username, email: user.email}
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The delete user dialog was closed');
      //this.animal = result;
    });
  }

  updateRoles(user): void {
    console.log(user);
    //this.userData = user;
    //var userData = {} as UserData;
    const dialogRef = this.dialog.open(UpdateroleComponent, {
      width: '500px',
      height: '500px',
      //autoFocus: true,
      data: {userId: user.userId, username: user.username}
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The update role dialog was closed');
      //this.animal = result;
    });
  }

  // addUser(): void {
  //   this.isPopupOpened = true;
  //   console.log('clicekd add');
  //   const dialogRef = this.dialog.open(CreateuserComponent, {
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.isPopupOpened = false;
  //   });
  // }
}
