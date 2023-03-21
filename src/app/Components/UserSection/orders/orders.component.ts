import { Component, OnInit } from '@angular/core';
import { CropOnSale } from 'Models/croponsale.model';
import { Invoice } from 'Models/invoice.model';
import { CroponsaleService } from 'Service/croponsale.service';
import { InvoiceService } from 'Service/invoice.service';

import { EmailService } from 'Service/email.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cropinfo!: CropOnSale;
  decisioninfo: boolean = false;
  p: number = 1;
  searchText: any;
  totalLength: any;
  page: number = 1;
  constructor(
    private invoice: InvoiceService,
    //private toastr: ToastrService,
    private cropservice: CroponsaleService,
    private emailservice: EmailService,
    
  ) { }
  
  
  ngOnInit(): void {
    this.GetOrderDetails();
  }
  InvoiceList: Invoice[] = [];
  LogOut() {
    localStorage.removeItem('role');
  }
  GetOrderDetails() {
    this.invoice.GetOrders().subscribe((data) => {
      for (let x of data) {
        if (x.review == 'Status pending') {
          this.InvoiceList.push(x);
        }
         
      }
      //this.InvoiceList = data;

    });
  }
  //ConfirmOrder(order: Order) {}  
  RejectOrder(order: Invoice) {
    order.review = 'Rejected';
    this.invoice.UpdateOrder(order.invoiceId,order).subscribe((data) => {
      console.log(data);
    });
    alert('order was rejected');
    location.reload();
  }
  
  ReduceCropQuantity(order: Invoice) {
    this.cropservice.getCropOnSale(order.cropSaleId).subscribe((data) => {
      this.cropinfo = data;
      console.log(this.cropinfo);
      if (this.cropinfo.cropQty >= order.cropQty) {
        this.decisioninfo = true;
        this.cropinfo.cropQty =
          this.cropinfo.cropQty - order.cropQty;
        console.log(this.cropinfo.cropQty);

        this.cropservice
          .updateCropOnSale(order.cropSaleId, this.cropinfo)
          .subscribe((data) => {
            console.log(data);
          });
        order.review = 'Confirmed';
        if (this.decisioninfo) {
          this.invoice.UpdateOrder(order.invoiceId, order).subscribe((data) => {
            console.log(data);
          });
          alert('order was confirmed');
          alert('Mail Sent');
          //this.toastr.success('Mail Sent');
          this.emailservice.AdminConfirmedEmail(order).subscribe((data) => {
          //console.log(data);
          });
          location.reload();
        }
       
        //this.decisioninfo = true;
      }else{
        alert('No Available Stock');
        alert('Order cannot be processed');
       
      }
    });

  }

 }
