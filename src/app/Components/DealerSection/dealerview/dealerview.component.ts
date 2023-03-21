import { Component, OnInit } from '@angular/core';
import { CropOnSale } from 'Models/croponsale.model';
import { cropview } from 'Models/cropview.model';
import { CartService } from 'Service/cart.service';
import { CroponsaleService } from 'Service/croponsale.service';
import { CropviewService } from 'Service/cropview.service';


@Component({
  selector: 'app-dealerview',
  templateUrl: './dealerview.component.html',
  styleUrls: ['./dealerview.component.css']
})
export class DealerviewComponent implements OnInit {

  cropviewlist: CropOnSale[]=[];
  p:number=1;
  searchText:any;
  totalLength:any;
  page:number=1;
  constructor(private service:CroponsaleService, private cart:CartService) {
    this.getAll();
   }

  ngOnInit(): void {
    
  }

  getAll(){
    this.service.getAllCropOnSale().subscribe(result => {
      this.cropviewlist = result;
    });
  }
  SendCropData(crop:CropOnSale){
    this.cart.SaveCropData(crop);
  }

}
