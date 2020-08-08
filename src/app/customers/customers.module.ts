import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { MainComponent } from './main.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';


@NgModule({
  declarations: [
    MainComponent,
    CustomerListComponent, 
    CustomerDetailsComponent, 
    CustomerOrdersComponent, 
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
