import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html', // original
  // styleUrl: './app.component.css' // original
  templateUrl: './pages/home/home.component.html',
  styleUrl: './pages/home/home.component.css'
})
export class AppComponent {
  title = 'FoodAI';
}
