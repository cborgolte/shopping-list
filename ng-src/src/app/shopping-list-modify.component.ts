import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';

import { DragulaService } from 'ng2-dragula';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shopping-list-modify',
  templateUrl: './shopping-list-modify.component.html',
  styleUrls: ['./shopping-list-modify.component.css'],
  providers: []
})
export class ShoppingListModifyComponent implements OnInit {
  title = 'Modify Shopping List';
  lineItems: Map<string, LineItem[]> = new Map<string, LineItem[]>();
  categories: any[] = [];
  itemInput: FormControl = new FormControl('');

  constructor(private shoppingListService: ShoppingListService,
    private changeDetectorRefs: ChangeDetectorRef,
    private dragulaService: DragulaService) {

    }

  ngOnInit(): void {

    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
      this.changeDetectorRefs.detectChanges();
    });
    this.shoppingListService.obsLineItems.subscribe((lineItemMap) => {
       this.lineItems = lineItemMap;
       this.changeDetectorRefs.detectChanges();
    });
  }

  // handle entering a new item
  onEnter(input: any) {
    let value = input.value.trim();
    let amount = parseInt(value.split(' ', 1));
    if (!isNaN(amount)) {
      const valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    } else {
      amount = 1;
    }
    let category = input.dataset.category;
    this.shoppingListService.createLineItem(value, amount, true, category);
    // clear input
    input.value = "";
  }

  onSubmit(categoryName: string) {
    let value = this.itemInput.value.trim();
    let amount = parseInt(value.split(' ', 1), 1);
    if (!isNaN(amount)) {
      const valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    } else {
      amount = 1;
    }
    this.shoppingListService.createLineItem(value, amount, true, categoryName);
    this.itemInput.setValue('');
  }

  // decrease item quantity
  decrease(item: LineItem) {
    const minValue = 1;
    if (item.qty > minValue) {
      item.qty -= 1;
    }
    this.shoppingListService.updateLineItem(item);
  }

  // increase item quantity
  increase(item: LineItem) {
    if (item.qty === undefined || item.qty === null) {
      item.qty = 0;
    }
    item.qty += 1;
    this.shoppingListService.updateLineItem(item);
  }

  // remove item from list
  remove(item: LineItem) {
    this.shoppingListService.removeItem(item);
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem): string {
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr._id;
  }

  trackCategory(index: number, category: any): string {
    return category._id;
  }

  getVisibleCategories(): any[] {
    return this.categories.filter(c => c.visible);
  }

}
