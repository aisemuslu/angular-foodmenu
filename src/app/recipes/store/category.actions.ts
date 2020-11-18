import { Action } from '@ngrx/store';

import { Category } from '../category.model';


export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';



export class SetCategories implements Action {
  readonly type = SET_CATEGORIES;

  constructor(public payload: Category[]) {}
}

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;

  constructor(public payload: Category) {}
}

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;

  constructor(public payload: {index: number, updatedCategory: Category}) {}
}

export class DeleteCategory implements Action {
  readonly type = DELETE_CATEGORY;

  constructor(public payload: number) {}
}


export class StoreCategories implements Action {
  readonly type = STORE_CATEGORIES;
}

export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;
}

export type CategoryActions = SetCategories |
  AddCategory |
  UpdateCategory |
  DeleteCategory |
  StoreCategories |
 
  FetchCategories;
