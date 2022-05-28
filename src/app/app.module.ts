import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustumerService} from "./service/custumer.service";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {AddModalComponent} from "./component/add-modal/add-modal.component";
import {UpdateModalComponent} from "./component/update-modal/update-modal.component";
import {DeleteModalComponent} from "./component/delete-modal/delete-modal.component";
import {CustumerComponent} from "./component/custumer/custumer.component";
import {AppRoutingModule} from "./app-routing.module";
import { AccountComponent } from './component/account/account.component';
import { SearchAccComponent } from './component/search-acc/search-acc.component';
import { CustomerAccountsComponent } from './component/customer-accounts/customer-accounts.component';
import { LoginComponent } from './component/login/login.component';
import {AuthInterceptorService} from "./service/auth-interceptor-service.service";
import {AccountService} from "./service/account.service";
import {SecurityService} from "./service/security.service";
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CustumerComponent,
    NavbarComponent,
    AddModalComponent,
    UpdateModalComponent,
    DeleteModalComponent,
    AccountComponent,
    SearchAccComponent,
    CustomerAccountsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustumerService,
    AccountService,
    SecurityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
