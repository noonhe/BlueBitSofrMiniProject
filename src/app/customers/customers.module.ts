import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerDetailsComponent, CustomerOrdersComponent, MainComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
