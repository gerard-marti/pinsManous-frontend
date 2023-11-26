import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {PrimengModule} from "./primeng/primeng.module";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
