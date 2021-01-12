import { Order } from './order.model';
import { Product } from './product.model';
import { Injectable } from "@angular/core";
import { from, Observable } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Strawberry", "Cathegory 1", "Very tasty sweet strawberry from Krasnodar farm", 230),
        new Product(2, "Milk Prostokvashino, 1 l", "Cathegory 2", "Natural cow milk from Stavropol farm", 75),
        new Product(3, "Berry", "Cathegory 1", "Great berry from Krymus farm", 150),
        new Product(4, "Cottage cheese, 250 gr", "Cathegory 2", "Krasnodar farm cottage cheese from cow milk", 105),
        new Product(5, "Apple", "Cathegory 1", "Apples from Krymus farm", 95),
        new Product(6, "Banana", "Cathegory 1", "Bananas from Mexica's farm", 60),
        new Product(7, "Pear", "Cathegory 1", "Pears from Sochi farm, natural and sweet", 78),
        new Product(8, "Sour cream, 300 gr", "Cathegory 2", "Sour cream from Pyatigorsk farm", 86),
        new Product(9, "Kefir", "Cathegory 2", "Natural kefir from cow milk from Korenovsk", 97),
        new Product(10, "Mango", "Cathegory 1", "Natural mango from California", 360)
    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order]);
    }
}