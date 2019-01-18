import { Table3Component } from './table3/table3.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Table2Component } from './table2/table2.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '', redirectTo: '/userform', pathMatch: 'full' },
    { path: 'userform', component: UserFormComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'login', component: Table3Component },
    { path: 'sidenav', 
      component: SidenavComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'table1', component: Table2Component },
        { path: 'table2', component: Table2Component },
        { path: 'table3', component: Table3Component }
      ]
    },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SidenavComponent, PagenotfoundComponent, 
  DashboardComponent, Table2Component, Table3Component, UserFormComponent]