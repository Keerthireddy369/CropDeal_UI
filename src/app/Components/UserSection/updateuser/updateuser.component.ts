import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserprofileService } from 'Service/userprofile.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userId:any

  constructor(private service:UserprofileService) { }

  ngOnInit(): void {
  }
  updateform= new FormGroup({
    
    userAddress: new FormControl('',[Validators.required]),
    userPhoneNo:new FormControl('',[Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    
    
  })

  get form(){
   
    return this.updateform.controls;
  }
  changeRole(role:any) {
    console.log(role.target.value);
  }

  update(){
    this.userId=localStorage.getItem('userId')
    this.service.updateUserProfile(this.userId,this.updateform.value).subscribe();
    alert("updation successfull !");
}
}
