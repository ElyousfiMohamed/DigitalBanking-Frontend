import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../model/custumer";
import {CustumerService} from "../../service/custumer.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() custumer!: Customer;
  constructor(private custumerSRV: CustumerService) { }

  ngOnInit(): void {
    this.custumerSRV.getCustumers().subscribe((response: Customer[]) => {
      this.custumer = response[0];
    })
  }

  @Output()
  notify1:EventEmitter<void> = new EventEmitter<void>();

  onDeleteCustumer(custumerId:number): void {
    document.getElementById('closeIt')!.click();
    this.custumerSRV.deleteCustumer(custumerId).subscribe(
      (response: void) => {
        this.notify1.emit();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
