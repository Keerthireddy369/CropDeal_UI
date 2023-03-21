import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropOnSale } from 'Models/croponsale.model';
import { Invoice } from 'Models/invoice.model';
import { CartService } from 'Service/cart.service';
import { EmailService } from 'Service/email.service';
import { InvoiceService } from 'Service/invoice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

OrderTotal: number = 0;
InvoiceEmaillst: Invoice[] = [];
crpId: number=0;
ReqQuantity: number = 1;
CropDetails : CropOnSale[] = [];
Invoicedetail: Invoice[] = [];
InvoiceL: Invoice = {
  invoiceId: 0,
  cropSaleId:0,
  userId:0,
  orderDate: '',
  cropName: '',
  cropType:'',
  cropQty: 0,
  orderTotal: 0,
  review: '',
};
constructor(
  private Cart: CartService,
  private invoice: InvoiceService,
  
  private router: Router,
  private emailservice: EmailService
  ) {
    this.GetCropsData();
  }
  ngOnInit(): void {}
  GetCropsData() {
    this.CropDetails = this.Cart.CropData();
    console.log(this.CropDetails);  
  }
  LogOut() {
    localStorage.removeItem('token');
    this.Cart.MyCropList = [];
  }
  TotalAmount() {
    for (let x of this.CropDetails) {
      this.OrderTotal = this.OrderTotal + x.cropQty * x.cropPrice;
    }
  }
  SendMail(lst: any) {
    return this.emailservice
    .OrderPlacedEmail(this.InvoiceEmaillst)
    .subscribe((data) => {
      console.log(data);
    });
  }
  AddOrders(croplst: any) {
    var len = croplst.length;
    for (var x of croplst) {
      //(this.InvoiceL.invoiceId = 0),
        (this.InvoiceL.userId = x.crpId),
       (this.InvoiceL.cropSaleId=x.cropSaleId),
       (this.InvoiceL.orderDate = new Date().toISOString()),
       (this.InvoiceL.cropName = x.cropName),
       (this.InvoiceL.cropType = x.cropType),
       (this.InvoiceL.cropQty = x.cropQty),
       this.InvoiceL.orderTotal = x.cropPrice * x.cropQty;
       this.InvoiceL.review = 'Status pending';
       console.log(this.InvoiceL);
        this.invoice.AddOrders(this.InvoiceL).subscribe((data) => {
          console.log(data);
         this.InvoiceEmaillst.push(data);
          if (this.InvoiceEmaillst.length == len) {
            this.SendMail(this.InvoiceEmaillst);
          }
        });
      }
      alert('Your order was placed');
      alert('Mail sent - Order details');
     //function to delay the code for 3 seconds to show the message   
       function delay(time: any) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      delay(4000).then(() => console.log('ran after 1 second1 passed'));
      //this.SendMail(this.InvoiceEmaillst);  
       location.reload();
       }
}

