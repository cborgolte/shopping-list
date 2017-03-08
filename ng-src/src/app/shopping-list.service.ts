import {Injectable, Component, NgZone} from '@angular/core';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { LineItem } from './line-item';

const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class ShoppingListService {
  lineItems: LineItem[] = [];

  constructor(zone: NgZone, private dragulaService: DragulaService) {

    const li = this.lineItems; // alias

    dragulaService.drop.subscribe((value) => {
      console.log("ondrop");
      this.onDrop(value);
    });


    hoodie.ready.then( () => {

        function init(items: any[]) {
          li.length = 0; // clear the array
          let dbItems = items.filter( (element, index, array) => {
            let retval = element.type === 'LineItem';
            return retval;
          }).sort((lhs, rhs) => lhs.pos - rhs.pos);

          zone.run( () =>
            // merge dbItems in (empty) li
            Array.prototype.push.apply(li, dbItems)
          );
        }

        function dbHasChanged() {
          hoodie.store.findAll().then(init);
        }

        // initalize db
        dbHasChanged();

        //// Events

        // Handle store changes
        hoodie.store.on('change', dbHasChanged);

        // Load new user's data after a new user signs in
        hoodie.account.on('signin', (accountProperties) => {
          init([]);
        });

        // Clear data after a user signs out
        hoodie.account.on('signout', (accountProperties) => {
          init([]);
        });

      }
    );
  }

  private db_addLineItem(lineItem: LineItem): void {
    const lineItemRepr = (<any>lineItem);
    lineItemRepr.type = 'LineItem';
    hoodie.store.add(lineItemRepr).then(function(){
    });
  }

  private db_updateLineItem(lineItem: LineItem): void {
    const lineItemRepr = (<any>lineItem);
    hoodie.store.update(
      lineItemRepr.id,
      lineItem
    );
  }

  private db_updateLineItems(lineItems: LineItem[]): void {
    const lineItemsRepr = (<any[]>lineItems);
    hoodie.store.update(lineItemsRepr);
  }

  private db_deleteLineItem(lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    hoodie.store.remove({id: lineItemRepr.id});
  }

  private onDrop(args: any[]) {
    // since lineItems are the model of the dragula container,
    //  they are in correct order now. That is,
    //  we have to persist this new order here.
    let dbItems = this.lineItems.map((lineItem: LineItem, pos: number, array: LineItem[]) => {
      console.log(lineItem.name, lineItem.pos, pos);
      if (pos != lineItem.pos) {
        lineItem.pos = pos;
        return lineItem;
      }
      return null;
    }).filter((lineItem: LineItem, pos: number, array: LineItem[]) => {return lineItem != null});
    this.db_updateLineItems(dbItems);
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

  resetLineItems(lineItems: LineItem[]) {
    let items = lineItems.map((item) => {
      item.bought = false;
      item.selected = false;
      return item;
    });
    this.db_updateLineItems(items);
  }
};
