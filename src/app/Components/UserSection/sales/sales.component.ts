import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Invoice } from 'Models/invoice.model';
import { InvoiceService } from 'Service/invoice.service';
import {jsPDF} from 'jspdf'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  CropDetail: Invoice[] = [];
  TotalSalesAmount: any = 0;
  searchText: any;
  constructor(private orderservice: InvoiceService) {}
  ngOnInit(): void {
    this.ShowSalesData();
  }
  LogOut() {
    localStorage.removeItem('role');
  }
  ShowSalesData() {
    this.orderservice.GetOrders().subscribe((data) => {
      for (let x of data) {
        if (x.review == 'Confirmed') {
          this.CropDetail.push(x);
          this.TotalSalesAmount += x.orderTotal;
        }
      }
    });
  }
  PDFbtn() {
    console.log('Downloading PDF');
    let data = document.getElementById('PDFbtnDiv');
    this.generatePDF(data);
  }
  generatePDF(htmlcontent:any) {
    html2canvas(htmlcontent).then((canvas) => {
      let imgWidth = 120;
      let imgHeight = (canvas.height * (1.2 * imgWidth)) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a5');
      var position = 5;
      //pdf.text('Instruction', 60, 10); 
        pdf.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
         pdf.setLineWidth(0.5);
          pdf.rect(5, 3, 140, 204);
          pdf.save('SalesReport.pdf');
        });
       }
      }
