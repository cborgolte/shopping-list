import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { ShoppingListService } from './shopping-list.service';
import { AccountService } from './account/account.service';
import { AccountSignInComponent }  from './account/account-sign-in.component';
import { ShoppingListComponent }  from './shopping-list.component';
import { ShoppingListModifyComponent } from './shopping-list-modify.component';
import {DragulaModule, DragulaService} from 'ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListModifyComponent,
    ShoppingListComponent,
    AccountSignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    DragulaModule
  ],
  providers: [ShoppingListService, AccountService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }