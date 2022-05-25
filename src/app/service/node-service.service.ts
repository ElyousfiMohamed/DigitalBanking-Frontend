import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Customer} from "../model/custumer";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private custumers:Subject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  get custumers$(){
    return this.custumers;
  }

  addCustumers(data:Customer[]) {
    this.custumers.next(data);
  }

  constructor() { }
}
