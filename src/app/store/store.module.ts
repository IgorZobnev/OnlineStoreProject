import { AdminComponent } from '../Admin/admin.component';
import { CheckoutComponent } from './../checkout/checkout.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { ModelModule } from './../../Model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms'
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      BrowserModule,
      ModelModule,
      FormsModule,
      RouterModule
    ],
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailsComponent,
        CheckoutComponent
    ]
  })
  export class StoreModule { }
  