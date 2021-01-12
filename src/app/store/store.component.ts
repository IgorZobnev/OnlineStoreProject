import { Router } from '@angular/router';
import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPages = 3;
  public selectedPage = 1;

  constructor(private repository : ProductRepository, private cart: Cart, private router: Router) {}

  ngOnInit(): void {
  }

  get products() : Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPages;
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPages);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory? : string) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  changePage(newPage : number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize : number) {
    this.productsPerPages = Number(newSize);
    this.changeCategory();
  }

  get pageNumbers() : number[] {
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / 
    this.productsPerPages)).fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
