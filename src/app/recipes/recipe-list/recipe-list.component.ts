import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Cookies',
      'This is a Simple Cookie',
      'https://bakesbybrownsugar.com/wp-content/uploads/2023/04/Easter-Chocolate-Chip-Cookies-24.jpg'
    ),
    new Recipe(
      'Brownie',
      'This is a Simple Brownie',
      'https://handletheheat.com/wp-content/uploads/2017/03/Chewy-Brownies-Square-1.jpg'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
