import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

const rotas: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(rotas)
  ],
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ]
})
export class OrderModule { }
