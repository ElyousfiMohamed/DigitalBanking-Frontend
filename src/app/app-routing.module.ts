import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustumerComponent} from "./component/custumer/custumer.component";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {AccountComponent} from "./component/account/account.component";
import {CustomerAccountsComponent} from "./component/customer-accounts/customer-accounts.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "customer",
    component: CustumerComponent
  },
  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "customerAccounts",
    component: CustomerAccountsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
