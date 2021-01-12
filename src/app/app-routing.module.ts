import { FormsModule } from '@angular/forms';
import { StoreFirstGuard } from './storefirst.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
        {path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
        {path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard]},
        {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
        {path: "admin", loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule), canActivate: [StoreFirstGuard]},
        {path: "**", redirectTo: "/store"}
      ])],
  providers: [StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
