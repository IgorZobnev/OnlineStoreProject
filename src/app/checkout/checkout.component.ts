import { Order } from './../../Model/order.model';
import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/Model/Order.repository';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) { }

  ngOnInit(): void {
  }
  
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
