import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list-modify.component.css'],
  providers: []
})
export class ShoppingListComponent {
  title = 'Shopping List';
  private lineItems: Map<string, LineItem[]>;
  private categories: any[];
  private activeTab: string;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.lineItems = shoppingListService.getLineItems();
    this.categories = shoppingListService.getCategories();
  }

  // return line items that were selected for the shopping list
  getLineItems(category: string): LineItem[] {
    if (this.lineItems && this.lineItems[category]) {
      return this.lineItems[category].filter((item: LineItem) => item.selected);
    }
    return [];
  }

  getCategories(): any[] {
    return this.categories;
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr.id;
  }

  // done - clear bought items from list
  done(category: string) {
    let bought = this.lineItems[category].filter((item: LineItem) => item.bought);
    this.shoppingListService.resetLineItems(bought);
  }
}
