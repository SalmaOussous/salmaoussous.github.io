import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SoPortfolio';
  author = 'Salma Oussous';
  date = new Date();

}
