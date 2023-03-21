import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'Service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: RegistrationService, private route: Router) { }

  ngOnInit(): void {
  }

  userlist: any = ["Farmer", "Dealer"];
  status: any = ["Active"];

  onSignUp(form: NgForm) {
    this.service.postRegistration().subscribe(
      (res) => {
        console.log('submitted Successfully to database');
        alert('Profile Created Successfully');
        this.route.navigate(['']);
      },
      (err) => {
        console.log('error');
        alert('Some error occured');
      }

    )

  }



}
