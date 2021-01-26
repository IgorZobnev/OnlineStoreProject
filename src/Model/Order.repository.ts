import { RestDatasource } from './rest.datasource';
import { Order } from './order.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: RestDatasource){
        dataSource.getOrder().subscribe(data => {
            this.orders = data;
        });
    }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(or => {
            this.orders.splice(this.orders.findIndex(order => or.id == order.id), 1, or);  
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(or => {
            this.orders.splice(this.orders.findIndex(order => id == order.id), 1, or);
        });
    }
}