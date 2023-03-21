import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from 'Models/userprofile.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }

  formData: UserProfile = new UserProfile();

  baseUrl='https://localhost:5001/api/UserProfile';

  postRegistration(){
    return this.http.post(this.baseUrl,this.formData)
  }
}