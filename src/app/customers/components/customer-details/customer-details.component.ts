import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Customer } from '../../Data/interfaces';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer : Customer = null;
  constructor(
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.customerInfo.subscribe(
      result => {
        this.customer  = result;
      }
    )
  }

}
