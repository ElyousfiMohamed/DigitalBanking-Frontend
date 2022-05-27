import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account:any = "";
  id:string = "";

  constructor(private activeRoute:ActivatedRoute) {
    activeRoute.params.subscribe({
      next:(data) => {
        this.account = data;
        this.id = this.account.id;
      }
    })
  }

  ngOnInit(): void {
  }

}
