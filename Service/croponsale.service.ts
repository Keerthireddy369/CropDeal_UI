import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropOnSale } from 'Models/croponsale.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CroponsaleService {

  constructor(private http:HttpClient) { }

  formData: CropOnSale = new CropOnSale();
  readonly baseUrl ='https://localhost:5001/api/CropOnSale';

  postCropOnSale(cropSaleId:any){
    console.log(cropSaleId);
    return this.http.post<CropOnSale>(this.baseUrl,cropSaleId)
  }

  getCropOnSale(cropId:any):Observable<CropOnSale>{
    return this.http.get<CropOnSale>(this.baseUrl+'/'+ cropId)
  }

  getAllCropOnSale():Observable<CropOnSale[]>{
    return this.http.get<CropOnSale[]>(this.baseUrl+'/')
  }

  updateCropOnSale(id:any,cropSaleId:any){
    return this.http.put<CropOnSale>(this.baseUrl+'/'+id,cropSaleId)
  }

  deleteCropOnSale(cropSaleId:any){
    return this.http.delete<CropOnSale>(this.baseUrl+'/'+cropSaleId)
  }
}
