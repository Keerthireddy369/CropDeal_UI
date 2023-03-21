import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatus } from 'Models/userStatus.model';
import { ChangeStatusService } from 'Service/change-status.service';
import { UserprofileService } from 'Service/userprofile.service';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {

  p:number=1;
  searchText:any;
  totalLength:any;
  page:number=1;

  constructor(private service:UserprofileService, private serv:ChangeStatusService, private route:Router) { }
  profile:any;
  ngOnInit(): void {
    this.getUserProfies();
  }

  getUserProfies(){
    this.service.getUserProfile().subscribe(result =>{
      if(result!=null){
      this.profile=result;
    }else{
      alert("No users found");
    }
    },(err)=>{
     
      if(err.status==403){
        this.route.navigate(['**'])
       
      }else{
  
        alert("Some error occured! come back later");
      }
    }
    );

  }

  ChangeStatus(userId:any,status:any){
    var userstatus = new UserStatus()
    userstatus.userId=userId
    if(status=="Active"){
      status="Inactive";
    }
    else{
      status="Active";
    }
    userstatus.userStatus=status
    this.serv.changeStatus(userstatus).subscribe(result=>{
      if(result!=null){
          
          alert("Status Changed sucessfully");
      }
    })
    window.location.reload();
  }

}
