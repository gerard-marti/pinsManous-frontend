import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import {PrimengModule} from "../primeng/primeng.module";
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    PrimengModule
  ]
})
export class ViewModule { }
