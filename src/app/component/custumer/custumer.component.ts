import { HttpErrorResponse } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { CustumerService } from 'src/app/service/custumer.service';
import {Customer} from "../../model/custumer";
import {NodeService} from "../../service/node-service.service";

@Component({
  selector: 'app-customer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit {
  public custumers: Customer[] = [];
  @Input() cust:Customer[] = [];

  constructor(private custumerSRV: CustumerService,private nodeService:NodeService) {
    nodeService.custumers$.subscribe(n => this.custumers = n);
  }

  custumerCurrent: Customer = this.custumers[0];

  ngOnInit(): void {
    this.getCustumers();
  }

  public getCustumers(): void {
    this.custumerSRV.getCustumersByKw("").subscribe(
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
