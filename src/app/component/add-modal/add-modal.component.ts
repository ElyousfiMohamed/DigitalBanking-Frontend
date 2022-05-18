import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import { CustumerService } from 'src/app/service/custumer.service';
import {Customer} from "../../model/custumer";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  constructor(private custumerSRV: CustumerService) { }

  ngOnInit(): void {
  }

  @Output()
  notify:EventEmitter<void> = new EventEmitter<void>();

  onAddCustumer(addForm: NgForm): void {
    document.getElementById('close')!.click();
    this.custumerSRV.addCustumer(addForm.value).subscribe(
      (response: Customer) => {
        this.notify.emit();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
