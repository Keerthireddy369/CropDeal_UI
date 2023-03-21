import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  formValue!:FormGroup;
  fare: any;
  pId:any;
  total:any;
  TransactionForm = new FormGroup({
    number : new FormControl('', [Validators.required, Validators.maxLength(16),Validators.minLength(13)]),
    cvv : new FormControl('',[Validators.required , Validators.maxLength(3),Validators.minLength(3)]),
    });

    cropform = new FormGroup({
      cropQty: new FormControl('', [Validators.required]),
      cropPrice: new FormControl('', [Validators.required]),  
    })
    
  passengerId: any;
    get number() {
      return this.TransactionForm.get('number');
    }
    get cvv() {
      return this.TransactionForm.get('cvv');
    } 

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
