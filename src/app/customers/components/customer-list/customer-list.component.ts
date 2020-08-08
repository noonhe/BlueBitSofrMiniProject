import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ServiceResponse , Customer } from '../../Data/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customersList : Customer[] = [];
  currentTabIndex = 0;
  constructor(
    private customersService : CustomerService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(
      (result: ServiceResponse) => {
        if(result.resultCode === 0){
          this.customersList = result.data;
        }else {

        }
      },
      error => {

      }
    )
  }

  navigateToCustomerInfo(customer : Customer){
    this.router.navigate([`/customers/customer-info/${customer.id}/details`]);
  }

  navigateToOrders(customer : Customer):void{
    this.router.navigate([`/customers/customer-info/${customer.id}/orders`]);
  }
}
