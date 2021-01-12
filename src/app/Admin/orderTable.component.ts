import { Order } from './../../Model/order.model';
import { OrderRepository } from './../../Model/Order.repository';
import { Component } from "@angular/core";

@Component({
    templateUrl: "orderTable.component.html"
})

export class OrderTableComponent{
    includeShipped: boolean = false;
    constructor (private repository: OrderRepository) {}

    getAllOrders() : Order[] {
        return this.repository.getOrders().filter(order => this.includeShipped || !order.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    deleteOrder(id: number) {
        this.repository.deleteOrder(id);
    }
}