import {Injectable} from '@angular/core';
import { LineItem } from './line-item';

const _window: any = (<any>window);
const hoodie = _window.hoodie;

@Injectable()
export class ShoppingListService {
  lineItems = [];

  constructor() { 
    const li = this.lineItems; // alias
    hoodie.ready.then(
      function setupDB() {
        function init(items: any[]) {
          li.length = 0; // clear the array
          let dbItems = items.filter(function (element, index, array) {
            let retval = element.type === 'LineItem';
            return retval;
          });
          // merge dbItems in li
          Array.prototype.push.apply(li, dbItems);
        }

        function dbHasChanged() {
          console.log("DB has changed");
          hoodie.store.findAll().then(init);
        }
        hoodie.store.on('change', dbHasChanged);
        dbHasChanged();
      }
    );
  }

  private db_addLineItem(lineItem: LineItem): void {
    const lineItemRepr = (<any>lineItem);
    lineItemRepr.type = 'LineItem';
    hoodie.store.add(lineItemRepr).then(function(){
      console.log('persisted line item', JSON.stringify(lineItem));
    });
  }

  private db_updateLineItem(lineItem: LineItem): void {
    const lineItemRepr = (<any>lineItem);
    hoodie.store.update(
      lineItemRepr.id,
      lineItem
    );
  }

  private db_deleteLineItem(lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    hoodie.store.remove({id: lineItemRepr.id});
  }

  getLineItems(): LineItem[] {
    return this.lineItems;
  }

  createLineItem(name: string, qty: number, selected: boolean): LineItem {
    const lineItem = new LineItem();
    lineItem.pos = this.lineItems.length;
    lineItem.qty = qty;
    lineItem.name = name;
    lineItem.selected = selected;
    this.db_addLineItem(lineItem);
    return lineItem;
  }

  updateLineItem(item: LineItem) {
    this.db_updateLineItem(item);
  }

  removeItem(item: LineItem) {
    this.db_deleteLineItem(item);
  }
};
