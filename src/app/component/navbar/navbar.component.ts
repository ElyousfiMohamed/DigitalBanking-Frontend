import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../model/custumer";
import {HttpErrorResponse} from "@angular/common/http";
import {CustumerService} from "../../service/custumer.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private custumerSRV:CustumerService) { }

  public custumers0: Customer[] = [];
  @Input() custumers1!: Customer[];

  @Output()
  notify2:EventEmitter<Customer[]> = new EventEmitter<Customer[]>();

  @Output()
  notify3:EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  search(kw: string) {
    /*this.custumers0 = [];
    for (const custumer of this.custumers1) {
      if(custumer.nom.toLowerCase().indexOf(<string>kw.toLowerCase()) !== -1
      || custumer.email.toLowerCase().indexOf(<string>kw.toLowerCase()) !== -1) {
        this.custumers0.push(custumer);
      }
    }*/

    this.custumerSRV.getCustumersByKw(kw).subscribe(
      (response: Customer[]) => {
        console.log(response)
        this.custumers0 = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );

    if(kw === "")
      this.notify3.emit()

    this.notify2.emit(this.custumers0)
  }
}
