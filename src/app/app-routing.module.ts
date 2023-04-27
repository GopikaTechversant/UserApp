import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'userlist',loadChildren:() => import('./modules/dashboard/dashboard.module')
    .then(m => m.DashboardModule)},
  {path:'',loadChildren:() => import('./modules/authentication/authentication.module')
  .then(m => m.AuthenticationModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }