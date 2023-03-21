import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'Models/invoice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  
  readonly rootUrl = 'https://localhost:5001/api/Invoice';
  constructor(private http: HttpClient) {}

  GetOrders(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.rootUrl + '/Getall');
  }
  AddOrders(order: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.rootUrl + '/AddOrder', order);
  }
  DeleteOrder(invoiceid: any) {
    return this.http.delete<Invoice>(
      this.rootUrl+'/'+ invoiceid);
      
    }
  UpdateOrder(id: any, order: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(
      this.rootUrl + '/put?id=' + id, order );
    }
  
  
}
