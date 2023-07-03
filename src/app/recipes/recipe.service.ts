import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
