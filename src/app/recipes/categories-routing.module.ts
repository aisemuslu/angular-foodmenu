import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryStartComponent } from './category-start/category-start.component';
import { CategoriesComponent } from './categories.component';

const categoriesRoutes: Routes = [
  { path: '', component: CategoriesComponent, children: [
    { path: '', component: CategoryStartComponent },
    { path: 'new', component: CategoryEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: CategoryDetailComponent },
    { path: ':id/edit', component: CategoryEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class CategoriesRoutingModule {}
