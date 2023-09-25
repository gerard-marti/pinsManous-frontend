import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";

const routes: Routes = [
  {path: '', children: [
      {path: 'login', component: LoginComponent},
      // {path: 'admin', component: AdminHomeComponent, canActivate: [ValidateUserGuard], canMatch: [ValidateUserGuard]}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
