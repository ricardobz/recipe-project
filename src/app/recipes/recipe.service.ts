import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Cookies',
      'This is a Simple Cookie',
      'https://bakesbybrownsugar.com/wp-content/uploads/2023/04/Easter-Chocolate-Chip-Cookies-24.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Chocolate', 2),
      ]
    ),
    new Recipe(
      'Brownie',
      'This is a Simple Brownie',
      'https://handletheheat.com/wp-content/uploads/2017/03/Chewy-Brownies-Square-1.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Chocolate', 2),
        new Ingredient('Dark Chocolate', 1),
      ]
    ),
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
