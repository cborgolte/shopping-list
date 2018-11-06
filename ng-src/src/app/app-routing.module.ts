import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorComponent } from './modules/editor/editor.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { AccountSignInComponent } from './modules/account/account-sign-in.component';
import { AccountSignUpComponent } from './modules/account/account-sign-up/account-sign-up.component';
import { CategoryComponent } from './modules/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify',  component: EditorComponent },
  { path: 'shop',  component: ChecklistComponent },
  { path: 'shop/:tab',  component: ChecklistComponent },
  { path: 'categories',  component: CategoryComponent },
  { path: 'sign-in',  component: AccountSignInComponent },
  { path: 'sign-up',  component: AccountSignUpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
