import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:string='';
  password:string='';
  usersData: User[] = [];
  constructor(private router:Router){}
  ngOnInit(): void {
    const userData = localStorage.getItem('users');
    if (userData) {
      this.usersData = JSON.parse(userData);
    }
  }
  onSubmit(): void {
    

    const user = this.usersData.find((u) => u.email === this.email && u.password === this.password);
    
    if (user) {
      console.log("user exist");
      
      this.router.navigate(['/userlist']);
    } else {
      alert('User does not exist');
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

}
