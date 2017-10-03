import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipes-list',
    templateUrl: 'recipes-list.component.html'
})

export class RecipesListComponent {
        // tslint:disable-next-line:max-line-length
    recipes: Recipe[] = [
        new Recipe( 'A Test Recipe', 'This is test of description', 'http://www.pngall.com/wp-content/uploads/2016/06/Junk-Food-PNG-Image.png' ),
        // tslint:disable-next-line:max-line-length
        new Recipe( 'Second Test', 'This is simple test of Recipe2', 'http://www.appsgeyser.com/assets/5df9921a/icons/recipe-icon-6.png' )
    ];
}
