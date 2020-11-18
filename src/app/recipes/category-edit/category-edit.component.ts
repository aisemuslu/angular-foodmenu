import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as CategoryActions from '../store/category.actions';
import * as fromCategory from '../store/category.reducers';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: number;
  editMode = false;
  categoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromCategory.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
   
    if (this.editMode) {
      this.store.dispatch(new CategoryActions.UpdateCategory({
        index: this.id,
        updatedCategory: this.categoryForm.value
      }));
    } else {
      this.store.dispatch(new CategoryActions.AddCategory(this.categoryForm.value));
    }
    this.onCancel();
  }

 
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let categoryName = '';
   

    if (this.editMode) {
      this.store.select('categories')
        .take(1)
        .subscribe((categoryState: fromCategory.State) => {
          const category = categoryState.categories[this.id];
          categoryName = category.name;
     
        });
    }

    this.categoryForm = new FormGroup({
      'name': new FormControl(categoryName, Validators.required)
     
    });
  }


}
