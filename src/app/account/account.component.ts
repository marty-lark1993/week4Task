import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  userDetails:any = {}

  constructor(private router:Router){}

  ngOnInit(){
    const user = sessionStorage.getItem('user')
    if(user){
      this.userDetails = JSON.parse(user)
    } else {
      this.router.navigate(['/login'])
    }
  }

  editUser(){
    this.router.navigate(['/profile'])
  }
}
