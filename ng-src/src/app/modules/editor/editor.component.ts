import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LineItem } from '../../shared/models/line-item';
import { ShoppingListService } from '../../shared/service/shopping-list.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor-modify',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: []
})
export class EditorComponent implements OnInit, OnDestroy {
  title = 'Modify Shopping List';
  lineItems: Map<string, LineItem[]> = new Map<string, LineItem[]>();
  categories: any[] = [];
  itemInput: FormControl = new FormControl('');

  constructor(
    private shoppingListService: ShoppingListService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.shoppingListService.obsCategories.subscribe(cat => {
      this.categories = cat.filter(c => c.name !== 'all');
      this.changeDetectorRefs.detectChanges();
    });

    this.shoppingListService.obsLineItems.subscribe(lineItemMap => {
      console.table(lineItemMap['cat1']);
      this.lineItems = lineItemMap;
      this.changeDetectorRefs.detectChanges();
    });
  }

  ngOnDestroy(): void {}

  onSubmit(categoryName: string) {
    let value = this.itemInput.value.trim();
    let amount = parseInt(value.split(' ', 1), 10);
    if (!isNaN(amount)) {
      const valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    } else {
      amount = 1;
    }
    this.itemInput.setValue('');
    this.shoppingListService.createLineItem(value, amount, true, categoryName);
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem): string {
    const lineItemRepr = <any>lineItem;
    return lineItemRepr._id;
  }

  trackCategory(index: number, category: any): string {
    return category._id;
  }

  getVisibleCategories(): any[] {
    return this.categories.filter(c => c.name !== 'all' && c.visible);
  }
}
