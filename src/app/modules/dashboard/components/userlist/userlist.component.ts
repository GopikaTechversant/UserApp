import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  loggedInUser: User | null = null;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('users');
    if (userData) {
      this.users = JSON.parse(userData);
    }

    const loggedInUserData = localStorage.getItem('user');
    if (loggedInUserData) {
      this.loggedInUser = JSON.parse(loggedInUserData);
      console.log(this.loggedInUser);
      
    }
  }

  isAdmin() {
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }


openEditDialog(user: User): void {
  const dialogRef = this.dialog.open(EditComponent, {
    width: '500px',
    data: { user: user }
  });
  dialogRef.afterClosed().subscribe(result => {
  console.log("result",result);
  //  console.log("user.id fhuf",user);
 
   
    for(const element of this.users){
     
      if(result.data.id == element.id){
        console.log("matches",element.id);
        console.log("result.data.user",result.data.username);
        console.log("element.email",element.email);
        
        element.username=result.data.username;
        element.email=result.data.email;
        element.password=result.data.password;
      }
     
      
    }
    console.log("users here",this.users);
  
  
    console.log('The dialog was closed');
  });
}
deleteUser(user: User): void {
  const userIndex = this.users.findIndex(u => u.id === user.id);
  this.users.splice(userIndex, 1);
  localStorage.setItem('users', JSON.stringify(this.users));
}
}
