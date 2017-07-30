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
  private lineItems = new Map<string, LineItem[]>();
  private categories: any[] = [];
  private activeTab: string;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    shoppingListService.obsLineItems.subscribe((lineItems) => this.lineItems = lineItems);
    shoppingListService.obsCategories.subscribe((cat) => this.categories = cat);
  }

  // return line items that were selected for the shopping list
  getLineItems = (category: string) =>  {
    if (this.lineItems && this.lineItems[category]) {
      return this.lineItems[category].filter((item: LineItem) => item.selected);
    }
    return [];
  }

  getVisibleCategories(): any[] {
    return this.categories
      .filter(c => c.visible)
      .filter(c => this.getLineItems(c.name).length > 0);
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem): string {
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr._id;
  }

  trackCategory(index: number, category: any): string {
    return category._id;
  }

  // done - clear bought items from list
  done(category: string) {
    let bought = this.lineItems[category].filter((item: LineItem) => item.bought);
    this.shoppingListService.resetLineItems(bought);
  }
}
