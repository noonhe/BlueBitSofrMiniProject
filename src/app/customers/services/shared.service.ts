import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../Data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private customerInfo$ = new BehaviorSubject<Customer>(null);
  customerInfo = this.customerInfo$.asObservable()
  constructor() { }

  changeCustomerInfo(value : Customer){
    this.customerInfo$.next(value);
  }
}
