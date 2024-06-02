import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAIService } from '../../api/openai/openai.service';

interface RecipeObject {
  mealType: string;
  cuisineType: string;
  intolerances: string[];
  ingredients: string[];
}

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

  public recipe: RecipeObject = {
    mealType: '',
    cuisineType: '',
    intolerances: [],
    ingredients: []
  };

  public selectedMealType: string = '';
  public selectedCuisineType: string = '';
  public selectedIntolerances: string[] = [];
  public selectedIngredients: string[] = [];

  public generatedRecipeText: string = '';

  constructor(private openAIService: OpenAIService) {
    // console.log(this.ingredients)
  }

  ngOnInit() {
  }

  addMealType(mealType: string) {
    this.recipe.mealType = mealType;
    this.selectedMealType = mealType;
  }

  addCuisineType(cuisineType: string) {
    this.recipe.cuisineType = cuisineType;
    this.selectedCuisineType = cuisineType;
  }

  addIntolerance(intolerance: string) {
    const index = this.recipe.intolerances.indexOf(intolerance);
    if (index === -1) {
      this.recipe.intolerances.push(intolerance);
      this.selectedIntolerances.push(intolerance);
    }
  }

  addIngredient(ingredient: string) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    if (index === -1) {
      this.recipe.ingredients.push(ingredient);
      this.selectedIngredients.push(ingredient);
    }
  }

  async generateRecipe() {
    console.log('Generate Recipe:', this.recipe);

    const prompt = `You are an AI Chef. Create a recipe with the following details:\n
    Meal Type: ${this.recipe.mealType}\n
    Cuisine Type: ${this.recipe.cuisineType}\n
    Intolerances: ${this.recipe.intolerances.join(', ')}\n
    Ingredients: ${this.recipe.ingredients.join(', ')}\n`;

    try {
      const response = await this.openAIService.getResponse(prompt);
      this.generatedRecipeText = response.choices[0].text;
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  isSelected(item: string, category: string): boolean {
    switch (category) {
      case 'mealType':
        return this.selectedMealType === item;
      case 'cuisineType':
        return this.selectedCuisineType === item;
      case 'intolerance':
        return this.selectedIntolerances.includes(item);
      case 'ingredient':
        return this.selectedIngredients.includes(item);
      default:
        return false;
    }
  }
}