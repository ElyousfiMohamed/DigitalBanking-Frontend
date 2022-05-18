import { Component, OnInit } from '@angular/core';
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

  constructor(private accountSRV: AccountService) { }
  currPage : number = 0;
  sizePage: number = 5;
  account: Account | undefined;
  ngOnInit(): void {
  }

  handleSearchAccount(id: string) {
    this.accountSRV.getAccount(id,this.currPage,this.sizePage).subscribe(
      (response: Account) => {
        this.account = response;
        console.log(this.account);
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      });
  }

  gotoPage(page: number) {
    this.currPage = page;
    this.handleSearchAccount(this.account!.id)
  }
}
