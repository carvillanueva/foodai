import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeGenerateComponent } from './pages/recipe-generate/recipe-generate.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'generate', component: RecipeGenerateComponent}
    // other routes...
  ];