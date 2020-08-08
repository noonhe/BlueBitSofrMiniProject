import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Customer } from '../../Data/interfaces';

@Component({
  selector: 'customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  customer : Customer = null;
  constructor(
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.customerInfo.subscribe(
      result =>{
        this.customer = result;
      }
    )
  }

}
