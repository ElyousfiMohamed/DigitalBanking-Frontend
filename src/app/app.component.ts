import {Component, OnInit} from '@angular/core';
import {Customer} from "./model/custumer";
import {CustumerService} from "./service/custumer.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NodeService} from "./service/node-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DigitalBanking-Frontend';

  constructor(private custumerSRV: CustumerService,private nodeService:NodeService) { }

  public custumers: Customer[] = [];

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

  getIt() {
    this.getCustumers();
  }

  getSearch(custumersSearch: Customer[]) {
    this.nodeService.addCustumers(custumersSearch)
  }

  ngOnInit(): void {
    this.custumerSRV.getCustumers().subscribe(value => {
      this.custumers = value;
    })
  }
}
