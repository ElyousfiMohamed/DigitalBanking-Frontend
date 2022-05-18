import { HttpErrorResponse } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { CustumerService } from 'src/app/service/custumer.service';
import {Customer} from "../../model/custumer";

@Component({
  selector: 'app-customer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit {
  public custumers: Customer[] = [];

  constructor(private custumerSRV: CustumerService) { }

  custumerCurrent: Customer = this.custumers[0];

  ngOnInit(): void {
    this.getCustumers();
    console.log(this.custumers);
  }

  public getCustumers(): void {
    this.custumerSRV.getCustumers().subscribe(
      (response: Customer[]) => {
        this.custumers = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public currentCustumer(custumerC: Customer){
    this.custumerCurrent = custumerC;
  }

  getIt() {
    this.getCustumers();
  }

  getSearch(custumersSearch: Customer[]) {
      this.custumers = custumersSearch;
  }
}
