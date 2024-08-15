import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const backendURL = "http://localhost:3000"

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  // stores username password and error message for binding with the html page
  userName = ""
  password = ""
  errorMessage = ""

  constructor(private router:Router, private http: HttpClient) {}

  //login function for when user hits login button
  login(){
    // preps login data
    const loginData = {
      email: this.userName,
      password: this.password
    }

    //send the login data to the server
    this.http.post(backendURL+'/api/auth', loginData).subscribe(
      (response: any) => {
        if (response.valid) {
          // Store user details in session storage
          sessionStorage.setItem('user', JSON.stringify(response));

          // Navigate to the account page
          this.router.navigate(['/profile']);
          this.errorMessage = "";
        } else {
          this.errorMessage = "Invalid Username or Password, Try again";
        }
      },
      (error) => {
        this.errorMessage = "Error connecting to the server. Please try again later.";
      }
    );
  }
}
