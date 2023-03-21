import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { cropview } from 'Models/cropview.model';



@Injectable({
  providedIn: 'root'
})
export class CropviewService {

  constructor(private http:HttpClient) { }

  formData: cropview = new cropview();

  readonly baseUrl ='https://localhost:5001/api/ViewCrop';

  getAllcropview():Observable<cropview[]>{
    return this.http.get<cropview[]>(this.baseUrl)
  }
}