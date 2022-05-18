import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/custumer';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustumerService {
  private apServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getCustumers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apServerUrl}/customers`);
  }

  public getCustumersByKw(keyword: string | undefined): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apServerUrl}/customers/${keyword}`);
  }

  public addCustumer(custumer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apServerUrl}/customers`,custumer);
  }

  public updateCustumer(custumer: Customer): Observable<Customer> {
    console.log(custumer);
    return this.http.put<Customer>(`${this.apServerUrl}/customers/`+custumer.id,custumer);
  }

  public deleteCustumer(custumerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apServerUrl}/customers/${custumerId}`);
  }

  public getRandom(): Observable<Customer> {
    return this.http.get<Customer>(`${this.apServerUrl}/custumer`);
  }
}
