import { Component } from '@angular/core';
import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list-modify.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  title = 'Shopping List';
  private lineItems = null;

  constructor(private shoppingListService: ShoppingListService) {
    this.lineItems = shoppingListService.getLineItems();
  }

  // return line items that were selected for the shopping list
  getLineItems(): LineItem[] {
    return this.lineItems.filter((item: LineItem) => item.selected);
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr.id;
  }

  // done - clear bought items from list
  done() {
    let bought = this.lineItems.filter((item: LineItem) => item.bought);
    this.shoppingListService.resetLineItems(bought);
  }
}
