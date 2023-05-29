import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Milk', 2),
    new Ingredient('Flour', 2),
    new Ingredient('Sugar', 1),
    new Ingredient('Chocolate', 4),
  ];
}
