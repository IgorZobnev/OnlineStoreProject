import { Cart } from './../store/cart.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart, private router: Router) {}

  ngOnInit(): void {
  }

  goToCart() {
    this.router.navigateByUrl("/cart");
  }
}
