import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminHomeComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
