import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
<<<<<<< HEAD
    MatInputModule,
    MatFormFieldModule,
    SharedModule
    
=======
    // DatePipe,
    // SignUpDatePipe
>>>>>>> 57f9f5e40435b88baf41bc156b6d4af3fd5c9fc6
  ]
})
export class AuthenticationModule { }
