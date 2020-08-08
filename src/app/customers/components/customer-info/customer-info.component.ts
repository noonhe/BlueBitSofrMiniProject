import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router'
import { CustomerService } from '../../services/customer.service';
import { ServiceResponse } from '../../Data/interfaces';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customerId : string = null;
  detailsRoute :string = 'details';
  ordersRoute : string = 'orders';
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private customersService : CustomerService,
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.customersService.getCustomerById(this.customerId).subscribe(
      (result:ServiceResponse) => {
        if(result.resultCode === 0){
          this.sharedService.changeCustomerInfo(result.data);
        }else{

        }
      },
      error => {

      }
    )
  }

}
