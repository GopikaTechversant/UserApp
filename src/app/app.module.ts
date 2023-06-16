import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SortProductComponent } from './sort-product/sort-product.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { CropComponent } from './crop/crop.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SortProductComponent,
    ClickOutsideDirective,
    CropComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    FormsModule,
    RouterModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule ,
    HttpClientModule,
    IonicModule.forRoot(),
    
  ],
  exports: [MatAutocompleteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
