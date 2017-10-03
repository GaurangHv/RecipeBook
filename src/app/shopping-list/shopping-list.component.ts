import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrideint: Ingredients[] = [
    new Ingredients( 'Apple', 10 ),
    new Ingredients( 'Tomato', 100 )
  ];

  constructor() { }

  ngOnInit() {
  }

}
