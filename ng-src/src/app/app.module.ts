import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
  MatMenuModule,
  MatSliderModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { AccountService } from './modules/account/account.service';
import { AccountSignInComponent } from './modules/account/account-sign-in.component';
import { EditorComponent } from './modules/editor/editor.component';
import { ChecklistComponent } from './modules/checklist/checklist.component';
import { AccountSignUpComponent } from './modules/account/account-sign-up/account-sign-up.component';
import { CategoryComponent } from './modules/category/category.component';
import { CategoryItemComponent } from './modules/category/category-item/category-item.component';
import { ChecklistItemComponent } from './modules/checklist/checklist-item/checklist-item.component';
import { EditorItemComponent } from './modules/editor/editor-item/editor-item.component';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';
import { ChecklistModule } from './modules/checklist/checklist.module';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AccountSignInComponent,
    AccountSignUpComponent,
    EditorItemComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // own
    MaterialModule,
    CategoryModule,
    ChecklistModule
  ],
  providers: [ShoppingListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
