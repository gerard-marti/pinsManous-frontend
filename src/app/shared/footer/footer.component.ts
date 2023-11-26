import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  onNavigate(socialMedia: string) {
    switch (socialMedia) {
      case 'MA':
        window.open('mailto:juntapinsmanous3@gmail.com');
        return;
      case 'GH':
        window.open('https://www.linkedin.com/in/gerard-marti-sendra/');
        return;
    }

    window.open()
  }

  getCurrentDate(): number {
    return new Date().getFullYear();
  }

}
