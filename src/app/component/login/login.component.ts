import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../../service/security.service";
import {AppUser} from "../../model/appUser";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private security:SecurityService,private router: Router ) { }
  appUser:AppUser = {
    username : "",
    password : ""
  }
  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
      this.appUser.username = loginForm.value.username;
      this.appUser.password = loginForm.value.password;
      this.security.login(this.appUser).subscribe(
        resp => {
            console.log(resp);
            sessionStorage.setItem('token',"Bearer "+resp.accessToken);
            sessionStorage.setItem('username',this.appUser.username);
            this.router.navigate(['/customer']);
        }
      );
  }
}
