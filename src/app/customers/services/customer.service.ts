import { Injectable } from '@angular/core';
import { customerList } from '../Data/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
  ) { }
  
  public getCustomers (){
    return of({
      resultCode: 0,
      data: customerList
    })
  }

  public getCustomerById(id: string){
    let customer = customerList.find(item => item.id === id);
    return of({
      resultCode: 0,
      data: customer
    });
  } 

  public getCustomerOrders(id:string){
    let customer = customerList.find(item => item.id === id);
    return of({
      resultCode: 0,
      data: customer.order
    });
  }

}
