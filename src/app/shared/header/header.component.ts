import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  items: MenuItem[] = [];

  constructor() {
    this.items = [
      {label: "Pàgina principal", icon: "fa-solid fa-house", routerLink:"/home", styleClass: "ml-2"},
      {label: "Història", icon: "fa-solid fa-monument", routerLink:"/history"},
      {label: "Festes", icon: "fa-solid fa-champagne-glasses", routerLink:"/holiday-schedule"}
    ]
  }
}
