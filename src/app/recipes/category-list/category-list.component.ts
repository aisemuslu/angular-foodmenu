import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromCategory from '../store/category.reducers';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryState: Observable<fromCategory.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromCategory.FeatureState>) {
  }

  ngOnInit() {
    this.categoryState = this.store.select('categories');
  }

  onNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
