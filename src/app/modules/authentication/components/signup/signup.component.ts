import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  user:User={id:0,username:'',email:'',role:'',password:'',time:''};
  usersData:User[]=[];
 
  
  constructor(private router:Router){}
  ngOnInit(): void {
      const userData = localStorage.getItem('users') ;
      if(userData){
        this.usersData = JSON.parse(userData);
      }
      
  }
  signup():void{
    console.log(this.usersData)
    const existingUser = this.usersData.find(u => u.email == this.user.email)
    if(existingUser){
      alert("User already exist");
      return;
    }
    this.user.id = this.usersData.length+1;
    this.user.time = new Date().toString();
    this.usersData.push(this.user);
    localStorage.setItem('users',JSON.stringify(this.usersData) );
    alert("User created successfully");
    this.router.navigate(['']);
  }
  // dateTime = new Date().toLocaleString()
  
}