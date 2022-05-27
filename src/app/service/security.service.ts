import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../model/custumer";
import {AppUser} from "../model/appUser";

const optionRequete = {
  headers: new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private apServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public login(appUser:AppUser): Observable<any> {
    let in_www_form = new URLSearchParams(Object.entries(appUser)).toString();
    return this.http.post<any>(`${this.apServerUrl}/login`, in_www_form,optionRequete);
  }

}
