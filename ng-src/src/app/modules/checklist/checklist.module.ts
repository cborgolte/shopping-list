import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';

@NgModule({
  declarations: [ChecklistComponent, ChecklistItemComponent],
  exports: [ChecklistComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule
  ]
})
export class ChecklistModule { }
