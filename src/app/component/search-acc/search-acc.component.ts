import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../service/account.service";
import {Account} from "../../model/bankaccount";
import {Customer} from "../../model/custumer";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-search-acc',
  templateUrl: './search-acc.component.html',
  styleUrls: ['./search-acc.component.css']
})
export class SearchAccComponent implements OnInit {

  constructor(private accountSRV: AccountService) {
  }

  currPage: number = 0;
  sizePage: number = 5;
  account: Account | undefined;
  opNumber: number = 0;
  dest: any;
  amnt: any;
  desc: any;
  @Input() accountId: string | undefined;

  ngOnInit(): void {
    if(this.accountId)
      this.handleSearchAccount(this.accountId!)
  }

  handleSearchAccount(id: string) {
    this.accountSRV.getAccount(id, this.currPage, this.sizePage).subscribe(
      (response: Account) => {
        this.account = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  gotoPage(page: number) {
    this.currPage = page;
    this.handleSearchAccount(this.account!.id)
  }

  handleSelectOp(number: number) {
    this.opNumber = number;
  }

  onSubmitOp(amount: string, description: string) {
    if (this.opNumber === 1) {
      var temp: number = +amount;
      this.accountSRV.credit(this.account!.id, temp, description).subscribe({
        next: (data) => {
          this.handleSearchAccount(this.account!.id);
          this.dest = this.amnt = this.desc = "";
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

    if (this.opNumber === 2) {
      var temp: number = +amount;
      this.accountSRV.debit(this.account!.id, temp, description).subscribe({
        next: (data) => {
          this.handleSearchAccount(this.account!.id);
          this.dest = this.amnt = this.desc = "";
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  onSubmitOpT(destination: string, amount: string, description: string) {
    var temp: number = +amount;
    this.accountSRV.transfer(destination, this.account!.id, temp, description).subscribe({
      next:(data) => {
        this.handleSearchAccount(this.account!.id);
        this.dest = this.amnt = this.desc = "";
    },
      error: (err => {
        console.log(err);
      })
    });
  }
}
