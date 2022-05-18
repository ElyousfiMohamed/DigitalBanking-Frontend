import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CustumerService} from "./service/custumer.service";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {AddModalComponent} from "./component/add-modal/add-modal.component";
import {UpdateModalComponent} from "./component/update-modal/update-modal.component";
import {DeleteModalComponent} from "./component/delete-modal/delete-modal.component";
import {CustumerComponent} from "./component/custumer/custumer.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CustumerComponent,
    NavbarComponent,
    AddModalComponent,
    UpdateModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
