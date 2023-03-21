import { Component, OnInit } from '@angular/core';
import { Crop } from 'Models/crop.model';
import { CropService } from 'Service/crop.service';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {

  p:number=1;
  searchText:any;
  totalLength:any;
  page:number=1;

  croplist : Crop[]=[];

  constructor(private service: CropService) {
    this.getAll();
   }

  ngOnInit():void {
    // this.cropService.getAllCrop().subscribe(
    //   (res:any) => {
    //     this.croplist=res;
    //   });
  }

  getAll(){
    this.service.getallCrop().subscribe(result => {
      this.croplist = result;
      this.totalLength = result.length;
      console.log(this.croplist);
    });
  }
  delete(cropId:any) {
    if (confirm("Do you want remove?")) {
      this.service.deleteCrop(cropId).subscribe(result => {
        this.getAll();
      });
}
}
}
