import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStatus } from 'Models/userStatus.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeStatusService {
  

  constructor(private http:HttpClient) { }

  formdata : UserStatus =new UserStatus()
  readonly baseUrl ='https://localhost:5001/api/Status';

  changeStatus(userstatus:any){
    return this.http.post(this.baseUrl,userstatus);
  }
}
