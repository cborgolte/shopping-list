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
  lineItems = null;

  constructor(private shoppingListService: ShoppingListService) { 
    this.lineItems = shoppingListService.getLineItems();
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem) { 
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr.id;
   }

}
