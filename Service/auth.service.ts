import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private route: Router) { }
  apiurl = 'https://localhost:5001/api/Login';

  ProceedLogin(usercred: any) {
    return this.http.post(this.apiurl, usercred);
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }
  logoutuser() {
    localStorage.removeItem('token')
    var yes = confirm("Are you sure want to logout?")
    if(yes){
    this.route.navigate(['/login'])
    }else{

    }
  }
  HaveAccess() {
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == 'admin') {
      return true
    } else {
      alert('access denied');
      return false
    }
  }
}
