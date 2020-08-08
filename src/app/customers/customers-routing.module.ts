import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'list',
        component: CustomerListComponent,
      },
      {
        path: 'customer-info/:id',
        component: CustomerInfoComponent,
        children: [
          {
            path:'details',
            component:CustomerDetailsComponent
          },
          {
            path:'orders',
            component:CustomerOrdersComponent
          }
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
