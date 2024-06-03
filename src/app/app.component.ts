import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <page-header></page-header>
    <router-outlet></router-outlet>
    <page-footer></page-footer>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'FoodAI';
}
