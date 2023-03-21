import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  apiurl='https://localhost:5001/api/Login'
  constructor(private http:HttpClient, private router:Router) { }

  tokenresp: any;

  ProceedLogin(usercred:any){
    return this.http.post(this.apiurl,usercred);
  }
  IsLogged() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem("token") || '';
  }
  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/this');
  }
}
