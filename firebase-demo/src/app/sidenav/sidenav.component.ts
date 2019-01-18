import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavItem } from '../Interfaces/nav-item';
import { UsermenuService } from '../services/usermenu.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {

  menuItems: NavItem[] = [{"displayName": "Dashboard"}, 
                          {"displayName": "Table 0"},
                          {"displayName": "Table 2"},
                          {"displayName": "Table 3"},
                          {"displayName": "Logout"},];
  // menuItems: NavItem[];
  // private username: string = localStorage.getItem('username');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private _router: Router, 
              private menuService: UsermenuService,
              public auth: AuthService) {}

  ngOnInit() {
    // this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu()
      .subscribe(
        res => {
          console.log(res);
          this.menuItems = res;
          this.menuItems.push(
          {
            displayName: 'Logout'
          });
        },
        err => console.log(err)
      )
  }

  navigateMenu(menuItem) {
    if (menuItem == 'Dashboard')
      this._router.navigate(['/sidenav/dashboard']);
    else if (menuItem == 'Table 0')
      this._router.navigate(['/sidenav/table2']);
    else if (menuItem == 'Table 2')
      this._router.navigate(['/sidenav/table2']);
      else if (menuItem == 'Table 3')
      this._router.navigate(['/sidenav/table3']);
    else if (menuItem == 'Logout')
    {
      // localStorage.removeItem('token');
      this._router.navigate(['/login']);
    }
  }

  logout() {
    // localStorage.removeItem('token');
    this.auth.signOut();
    // this._router.navigate(['/login']);
  }

}
