import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SortProductComponent } from './sort-product/sort-product.component';
import { CropComponent } from './crop/crop.component';
const routes: Routes = [
  {path:'userlist',loadChildren:() => import('./modules/dashboard/dashboard.module')
    .then(m => m.DashboardModule)},
    {path:'products',component:ProductsComponent},
    {path:'sort',component:SortProductComponent},
    {path:'crop',component:CropComponent},
  {path:'',loadChildren:() => import('./modules/authentication/authentication.module')
  .then(m => m.AuthenticationModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
