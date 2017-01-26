import { Component } from '@angular/core';
import { LineItem } from './line_item';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'Shopping List';
  lineItems = null;

  constructor(private shoppingListService: ShoppingListService) { 
    this.lineItems = shoppingListService.getLineItems();
    console.log('LineItems', JSON.stringify(this.lineItems));
  }

  // handle entering a new item
  onEnter(input: any) {
    let value = input.value;
    let amount = parseInt(value.split(' ', 1));
    if (!isNaN(amount)) {
      let valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    }
    else {
      amount = 1;
    }
    this.shoppingListService.createLineItem(value, amount, true);
    // clear input
    input.value = "";
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
  trackLineItems(index: number, lineItem: LineItem) { 
    const lineItemRepr = (<any>lineItem);
    console.log('track by:' + lineItemRepr);
    return lineItemRepr.id;
   }

}
