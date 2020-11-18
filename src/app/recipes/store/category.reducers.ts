import { Category } from '../category.model';

import * as CategoryActions from './category.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  categories: State
}

export interface State {
  categories: Category[];
}

const initialState: State = {
  categories: [
    new Category(
      '1',
      'Starters'
    ),
    new Category(
      '2',
      'Salads'
    ),
    new Category(
      '3',
      'Meats'
    ),
    new Category(
      '4',
      'Steaks'
    ),
    new Category(
      '5',
      'Beef Filets'
    ),
    new Category(
      '6',
      'Burgers'
    ),
     new Category(
      '7',
      'Garnish'
    ),
      new Category(
      '8',
      'Dessert'
    ),
  ]
};

export function categoryReducer(state = initialState, action: CategoryActions.CategoryActions) {

  switch (action.type) {
    case (CategoryActions.SET_CATEGORIES):
      return {
        ...state,
        categories: [...action.payload]
      };
    case (CategoryActions.ADD_CATEGORY):
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case (CategoryActions.UPDATE_CATEGORY):
      const category = state.categories[action.payload.index];
      const updatedCategory = {
        ...category,
        ...action.payload.updatedCategory
      };
      const categories = [...state.categories];
      categories[action.payload.index] = updatedCategory;
      return {
        ...state,
        categories: categories
      };
    case (CategoryActions.DELETE_CATEGORY):
      const oldCategories = [...state.categories];
      oldCategories.splice(action.payload, 1);
      return {
        ...state,
        categories: oldCategories
      };
    default:
      return state;
  }
}
