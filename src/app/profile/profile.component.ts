import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userDetails:any = {
    username: '',
    DOB: '',
    age: ''
  }

  errorMessage:string = ''

  constructor(private router:Router){}

  ngOnInit(){
    const user = sessionStorage.getItem('user')
    if(user){
      this.userDetails = JSON.parse(user)
    } else {
      this.router.navigate(['/login'])
    }
  }

  onSave(){
    const {username, DOB, age} = this.userDetails

    if(DOB && age){
      sessionStorage.setItem('user', JSON.stringify({username, DOB, age}))
      this.router.navigate(['/account'])
    }else{
      this.errorMessage = "Please fill out all required fields"
    }
  }
}
