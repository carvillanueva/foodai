import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-generate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-generate.component.html',
  styleUrl: './recipe-generate.component.css'
})
export class RecipeGenerateComponent {
  public title: string = 'FoodAI';
  public mealType: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
  public cuisineType: string[] = ['American', 'Italian', 'Mexican', 'Chinese', 'Japanese', 'Korean', 'Indian', 'French', 'Greek', 'Thai', 'Spanish', 'Vietnamese', 'Moroccan', 'British', 'Caribbean', 'Mediterranean', 'Middle Eastern', 'Nordic', 'Southern & Soul Food', 'German', 'Eastern European', 'Jewish', 'Cajun', 'South American', 'African', 'Asian', 'Central American', 'European', 'Latin American', 'North American', 'Oceania'];
  public dietType: string[] = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30'];
  public intolerances: string[] = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'];
  public ingredients: string[] = ['Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Salmon', 'Tofu', 'Eggs', 'Milk', 'Butter', 'Cheese', 'Yogurt', 'Rice', 'Pasta', 'Potatoes', 'Tomatoes', 'Onions', 'Garlic', 'Bell Peppers', 'Spinach', 'Broccoli', 'Carrots', 'Mushrooms', 'Zucchini', 'Avocado', 'Lettuce', 'Cucumber', 'Corn', 'Beans', 'Lentils', 'Chickpeas', 'Quinoa', 'Oats', 'Bread', 'Honey', 'Maple Syrup', 'Sugar', 'Flour', 'Baking Powder', 'Baking Soda', 'Vanilla Extract', 'Lemon Juice', 'Lime Juice', 'Soy Sauce', 'Vinegar', 'Olive Oil', 'Coconut Oil', 'Salt', 'Pepper'];

  constructor() {
    // console.log(this.ingredients)
  }

  ngOnInit() {

  }

}
