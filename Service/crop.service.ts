import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from 'Models/crop.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http:HttpClient) { }

  formData: Crop = new Crop();
  readonly baseUrl ='https://localhost:5001/api/Crop';

  postCrop(cropId:any)  : Observable<Crop>{
    return this.http.post<Crop>(this.baseUrl,cropId)
  }

  getallCrop() : Observable<Crop[]>{
    return this.http.get<Crop[]>(this.baseUrl);
  }

  deleteCrop(cropId : any) : Observable<Crop>{
    return this.http.delete<Crop>(this.baseUrl+'/'+cropId)
  }
}
