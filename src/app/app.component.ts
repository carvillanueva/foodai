import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html', // original
  // styleUrl: './app.component.css' // original
  template: `<router-outlet></router-outlet>`,
  // styleUrl: '',
})
export class AppComponent {
  title = 'FoodAI';
}
