import {Injectable} from '@angular/core';
import { LineItem } from './line_item';

const LINE_ITEMS: LineItem[] = [
  // {
  //   pos: 1,
  //   qty: 1,
  //   name: "Kartoffeln",
  //   selected: false
  // },
  // {
  //   pos: 2,
  //   qty: 5,
  //   name: "Zwiebeln",
  //   selected: true
  // }
];

const _window: any = (<any>window);
const hoodie = _window.hoodie;

hoodie.ready.then(

  function setupDB() {

    console.log('hoodie is ready');

    function init(items: any[]) {
      console.log("init");
      LINE_ITEMS.length = 0; // clear the array
      let dbItems = items.filter(function (element, index, array) {
        let retval = element.type === 'LineItem';
        return retval;
      });
      Array.prototype.push.apply(LINE_ITEMS, dbItems);
    }

    function dbHasChanged() {
      console.log("DB has changed");
      hoodie.store.findAll().then(init);
    }

    hoodie.store.on('change', dbHasChanged);
    dbHasChanged();
  }
);

@Injectable()
export class ShoppingListService {
  lineItems = LINE_ITEMS;

  getLineItems(): LineItem[] {
    return this.lineItems;
  }

  persistLineItem(lineItem: any): void {
    lineItem.type = 'LineItem';
    hoodie.store.add(lineItem).then(function(){console.log('persisted line item', JSON.stringify(lineItem));});
  }

  createLineItem(name: string, qty: number, selected: boolean): LineItem {
    const lineItem = new LineItem();
    lineItem.pos = this.lineItems.length;
    lineItem.qty = qty;
    lineItem.name = name;
    lineItem.selected = selected;
    // this.lineItems.push(lineItem);
    this.persistLineItem(lineItem);
    return lineItem;
  }
};
