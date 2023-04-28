import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './components/edit/edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DeleteComponent } from './components/delete/delete.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupTimePipe } from 'src/app/pipes/signup-time.pipe';
@NgModule({
  declarations: [
    UserlistComponent,
    EditComponent,
    DeleteComponent,
    SignupTimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
