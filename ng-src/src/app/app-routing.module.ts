import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListModifyComponent } from './modules/editor/shopping-list-modify.component';
import { ShoppingListComponent } from './modules/checklist/shopping-list.component';
import { AccountSignInComponent } from './modules/account/account-sign-in.component';
import { AccountSignUpComponent } from './modules/account/account-sign-up/account-sign-up.component';
import { CategoryComponent } from './modules/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify',  component: ShoppingListModifyComponent },
  { path: 'shop',  component: ShoppingListComponent },
  { path: 'shop/:tab',  component: ShoppingListComponent },
  { path: 'categories',  component: CategoryComponent },
  { path: 'sign-in',  component: AccountSignInComponent },
  { path: 'sign-up',  component: AccountSignUpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
