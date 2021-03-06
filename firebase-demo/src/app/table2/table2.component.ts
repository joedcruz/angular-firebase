import { CreateuserComponent } from '../createuser/createuser.component';
import { UserData } from './../Interfaces/userdata';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from './../services/userdata.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { UpdateroleComponent } from '../updaterole/updaterole.component';
// import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // public userData = {} as UserData;
  // animal: string;
  name: string;
  
  //isPopupOpened = true;
  //dataSource = [];
  //dataSource = new MatTableDataSource<UserData>([]);
  displayedColumns = ['select','userId', 'email', 'cuid', 'username', 'roles', 'update', 'delete'];
  listData = new MatTableDataSource;

  selection = new SelectionModel<UserData>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listData.data.length;
    return numSelected === numRows;
  }

   /** Selects all rows if they are not all selected; otherwise clear selection. */
  //  masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.listData.data.forEach(row => this.selection.select(row));
  // }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  //constructor(private userdataService: UserDataService) { }
  constructor(public dialog: MatDialog, private userdataService: UserDataService) { }

  ngOnInit() {
    this.userdataService.getUsers()
    .subscribe(data => this.listData.data = data);

    this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
  }

  ngAfterViewInit() {  
    // this.userdataService.getUsers()
    // .subscribe(data => this.listData.data = data);
  //   this.listData.paginator = this.paginator;
  //   this.listData.sort = this.sort;
  }

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
      data: {userId: user.userId, username: user.username}
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
      data: {userId: user.userId, username: user.username}
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
