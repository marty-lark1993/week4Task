import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  userName = ""
  password = ""
  errorMessage = ""

  users=[
    {UserName: "marty", Password:"test"},
    {UserName: "test", Password:"test"},
    {UserName: "user", Password: "password"}
  ]

  constructor(private router:Router) {}

  login(){
    let validUser = false

    for (let i = 0; i < this.users.length; i++){
      if(this.users[i].UserName === this.userName && this.users[i].Password === this.password){
        validUser = true
        break
      }
    }

    if(validUser){
      this.router.navigate(['/account'])
      this.errorMessage = ""
    } else {
      this.errorMessage = "invalid Username or Password, Try again"
    }
  }
}
