import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import {Customer} from "../../model/custumer";
import {AccountService} from "../../service/account.service";
import {Account} from "../../model/bankaccount";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {

  customer: any | undefined;
  bankAccounts: Account[] | undefined;

  constructor(private activeRoute:ActivatedRoute,private service:AccountService) {
    activeRoute.params.subscribe({
      next:(data) => {
        this.customer = data;
      }
    })
  }

  ngOnInit(): void {
    this.service.getCustomerAccount(this.customer.id).subscribe({
      next:(data) => {
        this.bankAccounts = data;
      }
    })
  }

}
