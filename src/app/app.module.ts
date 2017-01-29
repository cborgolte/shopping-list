import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListComponent }  from './shopping-list.component';
import { ShoppingListModifyComponent } from './shopping-list-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListModifyComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }