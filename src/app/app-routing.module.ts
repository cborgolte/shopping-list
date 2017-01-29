import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListModifyComponent }  from './shopping-list-modify.component';

const routes: Routes = [
  { path: '', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify',  component: ShoppingListModifyComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}