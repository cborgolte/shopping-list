import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { AccountService } from './modules/account/account.service';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';
import { ChecklistModule } from './modules/checklist/checklist.module';
import { EditorModule } from './modules/editor/editor.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // own
    MaterialModule,
    CategoryModule,
    ChecklistModule,
    EditorModule,
    AccountModule
  ],
  providers: [ShoppingListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
