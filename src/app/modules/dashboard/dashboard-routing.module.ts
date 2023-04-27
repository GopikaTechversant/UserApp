import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginComponent } from '../authentication/components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
    {path:'edit',component:EditComponent},
    {path:'delete',component:DeleteComponent},
    {path:'',component:UserlistComponent},
    
    
    // { path:'**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}