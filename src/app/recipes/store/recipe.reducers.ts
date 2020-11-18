import { Recipe } from '../recipe.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      '1',
      'Smoked Beefx',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
      ),
    new Recipe('2','DANA CARPACCIO',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','SMOKED RIB EYE',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('4','GRILLED SHRIMP',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('5','STEAK TARTAR',
      '1',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('6','ROCKET SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('7','GOAT CHEESE SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('8','TOMATO SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('9','AVOCADO SALAD',
      '2',
      'Tasty and yummy',
      'http://www.seriouseats.com/assets_c/2013/10/20131009-caesar-salad-food-lab-11-thumb-625xauto-357321.jpg'
      ),
      new Recipe('3','MEAT BALL',
      '3',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','MEAT SHIELD',
      '3',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','STEAK OF WEEK',
      '4',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','STEAK THE MAGNIFICENT',
      '4',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','BEEF FOR THE WIN',
      '5',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','KING OF THE BEEF',
      '5',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),

      new Recipe('3','ONE BURGER TO RULE EM ALL',
      '6',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','MEH GARNISH',
      '7',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','DESSERTED',
      '8',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
      new Recipe('3','BAKLAVA',
      '8',
      'Tasty and yummy',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
      ),
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
