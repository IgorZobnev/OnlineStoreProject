import { AuthService } from './auth.service';
import { RestDatasource } from './rest.datasource';
import { Cart } from './../app/store/cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from "@angular/core";
import { Order } from './order.model';
import { OrderRepository } from './Order.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule
({
    imports: [
        HttpClientModule
    ],
    providers: [
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        {provide: StaticDataSource, useClass: RestDatasource},
        RestDatasource,
        AuthService
    ]
})
export class ModelModule {} 