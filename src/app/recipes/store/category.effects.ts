import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as CategoryActions from '../store/category.actions';

import * as fromCategory from '../store/category.reducers';
import { Category } from '../category.model';

import * as _ from "lodash";

@Injectable()
export class CategoryEffects {
  @Effect()
  categoryFetch = this.actions$
    .ofType(CategoryActions.FETCH_CATEGORIES)
    .switchMap((action: CategoryActions.FetchCategories) => {
      return this.httpClient.get<Category[]>('https://test-f78a5.firebaseio.com/categories.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
    (categories) => {
      console.log(categories);

      return {
        type: CategoryActions.SET_CATEGORIES,
        payload: categories
      };
    }
    );

  @Effect({ dispatch: false })
  categoryStore = this.actions$
    .ofType(CategoryActions.STORE_CATEGORIES)
    .withLatestFrom(this.store.select('categories'))
    .switchMap(([action, state]) => {
     
      
          _.map(state.categories, function (cat) {
              cat["products"] = [];
             
            });
     
      const req = new HttpRequest('PUT', 'https://test-f78a5.firebaseio.com/categories.json', state.categories, { reportProgress: true });
      return this.httpClient.request(req);
    });



  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromCategory.FeatureState>) { }
}
