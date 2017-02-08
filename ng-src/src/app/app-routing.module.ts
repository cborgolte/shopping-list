import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListModifyComponent }  from './shopping-list-modify.component';
import { ShoppingListComponent }  from './shopping-list.component';
import { AccountSignInComponent }  from './account/account-sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify',  component: ShoppingListModifyComponent },
  { path: 'shop',  component: ShoppingListComponent },
  { path: 'log-in',  component: AccountSignInComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}