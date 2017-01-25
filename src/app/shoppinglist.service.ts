import {Injectable} from '@angular/core';
import { LineItem } from './line_item';

const LINE_ITEMS: LineItem[] = [
  {
    id: 1,
    qty: 1,
    name: "Kartoffeln",
    selected: false
  },
  {
    id: 2,
    qty: 5,
    name: "Zwiebeln",
    selected: true
  }
];

@Injectable()
export class ShoppingListService {
  lineItems = LINE_ITEMS;

  getLineItems(): LineItem[] {
    return this.lineItems;
  }

  createLineItem(name: string, qty: number, selected: boolean): LineItem {
    const lineItem = new LineItem();
    lineItem.id = this.lineItems[this.lineItems.length-1].id + 1;
    lineItem.qty = qty;
    lineItem.name = name;
    lineItem.selected = selected;
    this.lineItems.push(lineItem);
    return lineItem;
  }
};
