import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDataService } from './services/userdata.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UsermenuService } from './services/usermenu.service';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { Table3Component } from './table3/table3.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Table2Component } from './table2/table2.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    UpdateroleComponent,
    Table3Component,
    UserFormComponent,
    DashboardComponent,
    LoginComponent,
    PagenotfoundComponent,
    SidenavComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule, 
    BrowserAnimationsModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore, UserDataService, AuthService, AuthGuard, AngularFireAuth, UsermenuService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  entryComponents: [CreateuserComponent, UpdateuserComponent, DeleteuserComponent, UpdateroleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
