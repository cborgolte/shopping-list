import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { ShoppingListService } from './shopping-list.service';
import { AccountService } from './account/account.service';
import { AccountSignInComponent }  from './account/account-sign-in.component';
import { ShoppingListComponent }  from './shopping-list.component';
import { ShoppingListModifyComponent } from './shopping-list-modify.component';
import {DragulaModule, DragulaService} from 'ng2-dragula/ng2-dragula';
import { AccountSignUpComponent } from './account/account-sign-up/account-sign-up.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListModifyComponent,
    ShoppingListComponent,
    AccountSignInComponent,
    AccountSignUpComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragulaModule,
    // material
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [DragulaService, ShoppingListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
