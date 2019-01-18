import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        // Authorization: `Bearer ${this.auth.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
