import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  rolelist: any = ['Admin', 'Farmer', 'Dealer']
  userId:any;
  responsedata: any;
  errormessage = '';

  constructor(public service: AuthService, private route: Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    role: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  get form(){
    return this.Login.controls;
  }

  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('token',this.responsedata.token);
          localStorage.getItem('token');
          localStorage.setItem('userId',JSON.stringify(this.responsedata.userId));
          localStorage.setItem('role',JSON.stringify(this.Login.value.role));
          // this.route.navigate(['']);

          if (this.Login.value.role == 'Admin') {


            this.route.navigate(['/admin-page'])
          } else if (this.Login.value.role == 'Dealer') {

            this.route.navigate(['/dealer-page'])
          } else {

            this.route.navigate(['/farmer-page'])
          }

        }

      }, (err) => {

        if (err.status == 400) {
          alert("invalid request");
        } else {

          this.errormessage = err.message;
        }
      }
      )

    }
  }
  changeRole(role: any) {
    console.log(role.target.value);
  }
}

