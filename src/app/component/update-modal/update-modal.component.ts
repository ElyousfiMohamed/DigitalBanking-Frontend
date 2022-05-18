import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustumerService} from "../../service/custumer.service";
import {NgForm} from "@angular/forms";
import {Customer} from "../../model/custumer";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() custumer!: Customer;
  constructor(private custumerSRV: CustumerService) { }

  ngOnInit(): void {
    this.custumerSRV.getCustumers().subscribe((response: Customer[]) => {
      this.custumer = response[0];
    })
  }

  @Output()
  notify0:EventEmitter<void> = new EventEmitter<void>();

  onUpdateCustumer(updateForm: NgForm): void {
    document.getElementById('closed')!.click();
    this.custumerSRV.updateCustumer(updateForm.value).subscribe(
      (response: Customer) => {
        this.notify0.emit();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
