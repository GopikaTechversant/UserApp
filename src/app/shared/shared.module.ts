import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginHeaderComponent,
    LoginHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    LoginHeaderComponent
  ]
})
export class SharedModule { }
