import { UserData } from '../Interfaces/userdata';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavItem } from '../Interfaces/nav-item';

@Injectable({
  providedIn: 'root'
})
export class UsermenuService {
  
  constructor(private http: HttpClient) {}

    userData = {} as UserData;

    private _url: string = "http://localhost:5000/api/getwebusermenu";

    getMenu(): Observable<NavItem[]> { 
    //getMenu() {       

      this.userData.userId = localStorage.getItem('userId'); //'7c02fc06-cee9-4a14-937b-35d26dadd54d';
      // this.userInfo.userID = 'ef5be01f-cc0d-4e69-b819-b77f8b2d94f3';
      // this.userInfo.userID = 'ecb0bd58-1b77-4db8-b291-d0c9a1fd10fe';
      // this.userInfo.userID = '7c02fc06-cee9-4a14-937b-35d26dadd54d';

      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3M2IyNzNjOTRhODc0MzhjYjc1ODMwNzNhMzg2M2JlYiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZWY1YmUwMWYtY2MwZC00ZTY5LWI4MTktYjc3ZjhiMmQ5NGYzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkJhY2tvZmZpY2UiLCJBZG1pbiJdLCJleHAiOjE1NDYxMDQwMTMsImlzcyI6IlRUQSIsImF1ZCI6IlRUQSJ9.lG4hQ3rmlTrzZkh5dEphHgzN0wqOdYZCetHlaHa5Iws'
          //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDgwOTk2Mjc5M2Q0YzZkOTQ2MmRjYzRiZDk1MDJlYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZWNiMGJkNTgtMWI3Ny00ZGI4LWIyOTEtZDBjOWExZmQxMGZlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ2xpZW50IiwiZXhwIjoxNTQ2MTAzNjIwLCJpc3MiOiJUVEEiLCJhdWQiOiJUVEEifQ.Eld52mtZ7zcv3OSKRqbVrSe2uBAZ6iedU043K2ThS8c'
          //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNTEzNTlmMWNkZTY0OGJiOTYzYmFmNWVhZDAwZWI4YSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiN2MwMmZjMDYtY2VlOS00YTE0LTkzN2ItMzVkMjZkYWRkNTRkIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkRyaXZlciIsIkJhY2tvZmZpY2UiXSwiZXhwIjoxNTQ2MTAzNDE0LCJpc3MiOiJUVEEiLCJhdWQiOiJUVEEifQ.7EDBI4dUXjp3urp2jaCp6EP_czkM-lPRjIys154yM2A'
          'Authorization' : 'Bearer' + localStorage.getItem('token')
        })
      };

      return this.http.post<NavItem[]>(this._url, this.userData, httpOptions);
    }
}


  