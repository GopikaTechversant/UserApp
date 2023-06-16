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
    MatInputModule,
    MatFormFieldModule,
    SharedModule
    
  ]
})
export class AuthenticationModule { }
