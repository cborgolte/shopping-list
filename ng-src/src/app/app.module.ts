import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { AccountService } from './modules/account/account.service';
import { AccountSignInComponent } from './modules/account/account-sign-in.component';
import { EditorComponent } from './modules/editor/editor.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { DragulaModule, DragulaService  } from 'ng2-dragula';
import { AccountSignUpComponent } from './modules/account/account-sign-up/account-sign-up.component';
import { CategoryComponent } from './modules/category/category.component';
import { CategoryItemComponent } from './modules/category/category-item/category-item.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ChecklistComponent,
    AccountSignInComponent,
    AccountSignUpComponent,
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    // material
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [DragulaService, ShoppingListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
