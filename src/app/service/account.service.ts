import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Account} from "../model/bankaccount";

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':'application/json',
    'Access-Control-Allow-Methods':'POST',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  public getAccount(accountId : string, page : number, size : number):Observable<Account>{
    return this.http.get<Account>(environment.apiBaseUrl+"/bankAccounts/"+accountId+"/pgOperations?page="+page+"&size="+size);
  }
  public getCustomerAccount(customerId : string):Observable<Account[]>{
    return this.http.get<Account[]>(environment.apiBaseUrl+"/bankAccounts/"+customerId+"/customers");
  }
  public debit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.apiBaseUrl+"/bankAccounts/debit",data,optionRequete);
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.apiBaseUrl+"/bankAccounts/credit",data,optionRequete);
  }
  public transfer(accountDestination: string,accountSource: string, amount : number, description:string){
    let data={accountSource:accountSource, accountDestination:accountDestination,  amount :amount,description : description }
    return this.http.post(environment.apiBaseUrl+"/bankAccounts/transfer",data);
  }
}
