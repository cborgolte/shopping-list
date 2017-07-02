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
  lineItems: Map<string, LineItem[]>;

  constructor(private shoppingListService: ShoppingListService, private dragulaService: DragulaService) { 
    this.lineItems = shoppingListService.getLineItems();

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

  categories = [
    {
      name: 'all',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Obst',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Getränke',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Aufschnitt',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Küche',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Bad',
      updated: new Date('1/18/16'),
    },
    {
      name: 'Aufschnitt',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Küche',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Bad',
      updated: new Date('1/18/16'),
    }

  ];


}
