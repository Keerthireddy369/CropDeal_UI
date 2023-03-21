import { Injectable } from '@angular/core';
import { CropOnSale } from 'Models/croponsale.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  MyCropList: CropOnSale[] = [];
  dummy: CropOnSale[] = [];
  constructor() {}
  SaveCropData(crop: CropOnSale) {
    this.MyCropList.push(crop);
    console.log(this.MyCropList);
   }
   CropData() {
    return this.MyCropList;
  }
}
