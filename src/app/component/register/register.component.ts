import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppUser, NewAppUser} from "../../model/appUser";
import {SecurityService} from "../../service/security.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  appUser:NewAppUser = {
    username : "",
    password : "",
    confirmedPassword : "",
  }
  constructor(private security:SecurityService) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    this.appUser.username = registerForm.value.username;
    this.appUser.password = registerForm.value.password;
    this.appUser.confirmedPassword = registerForm.value.confirmedPassword;
    this.security.register(this.appUser).subscribe(
      resp => {
        console.log(alert("Registration Successful"));
      }
    );
  }
}
