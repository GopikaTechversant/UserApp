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
import { SignUpDatePipe } from 'src/app/pipes/sign-up-date.pipe';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
@NgModule({
  declarations: [
    UserlistComponent,
    EditComponent,
    DeleteComponent,
<<<<<<< HEAD
    SignUpDatePipe,
    HighlightDirective
=======
    SignUpDatePipe
>>>>>>> 57f9f5e40435b88baf41bc156b6d4af3fd5c9fc6
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
<<<<<<< HEAD
    ReactiveFormsModule
  ],
  exports: [
    UserlistComponent,
    HighlightDirective
=======
    ReactiveFormsModule,
    // DatePipe,
    
>>>>>>> 57f9f5e40435b88baf41bc156b6d4af3fd5c9fc6
  ]
})
export class DashboardModule { }
