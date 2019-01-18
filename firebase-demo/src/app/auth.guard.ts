import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable( // { providedIn: 'root'}
)
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    if (this._authService.isLoggedIn()) {
      return true
    // } else {
    //   this._router.navigate(['/login'])
    //   // this._router.navigate(['/table3'])
    //   return false
    // }
    }

    this._router.navigate(['/']);

    return false;
  }
}
