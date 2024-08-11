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

  // stores username password and error message for binding with the html page
  userName = ""
  password = ""
  errorMessage = ""

  // list of hard coded users
  users=[
    {UserName: "marty", Password:"test"},
    {UserName: "test", Password:"test"},
    {UserName: "user", Password: "password"}
  ]

  constructor(private router:Router) {}


  //login function for when user hits login button
  login(){
    // initialises  the user as not valid
    let validUser = false


    // for loop checks if user entered information is valid with hard coded users info
    for (let i = 0; i < this.users.length; i++){
      if(this.users[i].UserName === this.userName && this.users[i].Password === this.password){
        validUser = true
        break
      }
    }

    // if user info is valid page navigates to account page if not error message is presented
    if(validUser){
      this.router.navigate(['/account'])
      this.errorMessage = ""
    } else {
      this.errorMessage = "invalid Username or Password, Try again"
    }
  }
}
