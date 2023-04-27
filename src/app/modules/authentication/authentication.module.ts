import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';
// import { SignUpDatePipe } from 'src/app/pipes/sign-up-date.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    // DatePipe,
    // SignUpDatePipe
  ]
})
export class AuthenticationModule { }
