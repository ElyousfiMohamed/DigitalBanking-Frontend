import {Component, OnInit} from '@angular/core';
import {Customer} from "./model/custumer";
import {CustumerService} from "./service/custumer.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'DigitalBanking-Frontend';

  constructor(private custumerSRV: CustumerService) { }

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
    this.custumers = custumersSearch;
  }
}
