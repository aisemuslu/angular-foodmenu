import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';

import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;

  //authState: Observable<fromAuth.State>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState>,
    private storeApp: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    //this.authState = this.storeApp.select('auth');

    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
      }
      );
  }



  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
      this.storeApp.select('auth')
      .take(1)
      .subscribe((authState: fromAuth.State) => {
        if (!authState.authenticated) {
          alert('Please login first!');
        }
        else {
          this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
          this.router.navigate(['/recipes']);
        }

      });

  }

}
