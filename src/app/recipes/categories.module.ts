import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CategoriesComponent } from './categories.component';
import { CategoryStartComponent } from './category-start/category-start.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { CategoriesRoutingModule } from './categories-routing.module';

import { SharedModule } from '../shared/shared.module';
import { categoryReducer } from './store/category.reducers';
import { CategoryEffects } from './store/category.effects';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryStartComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature('categories', categoryReducer),
    EffectsModule.forFeature([CategoryEffects])
  ]
})
export class CategoriesModule {}
