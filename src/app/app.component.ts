import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customers: Customer[];
  selectedCustomers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
  }

  /*calculateCustomerTotal(name) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative.name === name) {
          total++;
        }
      }
    }

    return total;
  }*/

  onFilter(data: any) {
    console.log(data);
  }

  onRowSelect(event) {
    console.log(event);
  }
}
