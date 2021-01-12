import { Component } from "@angular/core";
import { Product } from "src/Model/product.model";
import { ProductRepository } from "src/Model/product.repository";

@Component({
    templateUrl: "productTable.component.html"
})

export class ProductTableComponent{
    constructor(private repository: ProductRepository){}

    getProducts() : Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}