import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


import * as fromCategory from '../store/category.reducers';
import * as CategoryActions from '../store/category.actions';

import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categoryState: Observable<fromCategory.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromCategory.FeatureState>,
              private storeApp: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.categoryState = this.store.select('categories');
        }
      );
  }

 

  onEditCategory() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCategory() {
  
    this.storeApp.select('auth')
      .take(1)
      .subscribe((authState: fromAuth.State) => {
        if (!authState.authenticated) {
          alert('Please login first!');
        }
        else {
            this.store.dispatch(new CategoryActions.DeleteCategory(this.id));
    this.router.navigate(['/categories']);
        }

      });

  }

}
