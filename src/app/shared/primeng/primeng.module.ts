import {NgModule} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule
  ]
})
export class PrimengModule { }
