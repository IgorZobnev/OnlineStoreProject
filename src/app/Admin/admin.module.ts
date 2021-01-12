import { OrderTableComponent } from './orderTable.component';
import { ProductTableComponent } from './productTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { AuthGuard } from './admin.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

let routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent, canActivate:[AuthGuard], 
        children: [
            {path: "products/:mode/:id", component: ProductEditorComponent},
            {path: "products/:mode", component: ProductEditorComponent},
            {path: "products", component: ProductTableComponent},
            {path: "orders", component: OrderTableComponent},
            {path: "**", redirectTo: "products"}
        ]
    },
    {path: "**", redirectTo: "auth"}
]);

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    providers: [
        AuthGuard
    ],
    declarations: [
        AuthComponent,
        AdminComponent,
        OrderTableComponent,
        ProductTableComponent,
        ProductEditorComponent
    ]
})

export class AdminModule {

}