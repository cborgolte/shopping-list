import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSignInComponent } from './account-sign-in.component';
import { AccountSignUpComponent } from './account-sign-up/account-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AccountSignInComponent, AccountSignUpComponent],
  exports: [AccountSignInComponent, AccountSignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class AccountModule {}
