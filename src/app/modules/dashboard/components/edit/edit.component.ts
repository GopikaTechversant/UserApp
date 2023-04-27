import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
  users: User[] = [];
  editedUser:any;
  username : FormControl;
  email: FormControl;
  password:FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditComponent>,
    private router: Router
  ) {
    console.log("this.data",this.data)
    this.username = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');    
  }

  ngOnInit(): void {
    this.user = this.data.user;
    this.username.setValue(this.user.username);
    this.email.setValue(this.user.email);
    this.password.setValue(this.user.password);
  }

  saveChanges() {
    
    // localStorage.setItem('users', JSON.stringify(this.users));
    // this.users = {...this.data};
    this.editedUser = {
      id: this.user.id,
      username: this.username.value,
      email: this.email.value,
      role: this.user.role,
      password: this.password.value
    };
    console.log("edited user",this.editedUser);
    
    // console.log("saving local data",this.data);
    this.dialogRef.close({data:this.editedUser});
    
    // this.router.navigate(['/userlist']);
  }

 
  onCancel(): void {
    //this.dialogRef.close({data:this.data});
    this.dialogRef.close();
    this.router.navigate(['/userlist']);
  }

}
