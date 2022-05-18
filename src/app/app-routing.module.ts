import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustumerComponent} from "./component/custumer/custumer.component"; // CLI imports router

const routes: Routes = [
  {
    path: "",
    component: CustumerComponent
  },
  {
    path: "account",
    component: CustumerComponent
  }
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
