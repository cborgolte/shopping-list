import { Component } from '@angular/core';
import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';

import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'shopping-list-modify',
  templateUrl: './shopping-list-modify.component.html',
  styleUrls: ['./shopping-list-modify.component.css'],
  providers: []
})
export class ShoppingListModifyComponent {
  title = 'Modify Shopping List';
  lineItems: Map<string, LineItem[]> = new Map<string, LineItem[]>();
  categories: any[] = [];

  constructor(private shoppingListService: ShoppingListService, private dragulaService: DragulaService) { 
    // this.lineItems = shoppingListService.getLineItems();

    shoppingListService.obsCategories.subscribe((cat) => this.categories.push(cat));
    shoppingListService.obsLineItems.subscribe((lineItemMap) => this.lineItems = lineItemMap);

    dragulaService.drop.subscribe((value) => {
      console.log("reorder", this.lineItems[value[0]]);
      this.shoppingListService.onReorder(value[0]);
    });
  }

  // handle entering a new item
  onEnter(input: any) {
    console.log(input);
    let value = input.value.trim();
    let amount = parseInt(value.split(' ', 1));
    if (!isNaN(amount)) {
      let valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    }
    else {
      amount = 1;
    }
    let category = input.dataset.category;
    console.log(category);
    this.shoppingListService.createLineItem(value, amount, true, category);
    /*
    this.lineItems[category] = this.lineItems[category] || [];
    this.lineItems[category].push(li);
    */
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
    return lineItemRepr.id;
  }

  getCategories(): any[] {
    return this.categories;
  }

}
