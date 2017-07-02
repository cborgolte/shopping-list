import {Injectable, Component, NgZone} from '@angular/core';
import { LineItem } from './line-item';

const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class ShoppingListService {
  lineItems: Map<string, LineItem[]> = new Map<string, LineItem[]>();
  categories: string[] = ['all'];

  constructor(zone: NgZone) {

    const li = this.lineItems; // alias
    const cat = this.categories;

    hoodie.ready.then( () => {

        function init(items: any[]) {

          // clear all data
          // WTF: li.clear() does not work!
          cat.forEach((c) => li[c] = []);
          cat.length = 0;

          // retrieve all line items
          let dbItems = items.filter( (element, index, array) => {
            let retval = element.type === 'LineItem';
            return retval;
          }).sort((lhs, rhs) => lhs.pos - rhs.pos);

          // collect all category entries (not implemented yet)
          let dbCategories = items.filter( (element) => element.type === 'Category')
            .sort((lhs: any, rhs: any) => lhs.pos - rhs.pos)
            .map((c) => c.name);

          zone.run(() => {

            // add all db categories
            Array.prototype.push.apply(cat, dbCategories);

            // collect items per category
            dbItems.forEach( (val: LineItem) => {
              if (val.categories) {
                val.categories.forEach((category) => {
                  if (!li[category]) {
                    li[category] = [];
                  }
                  li[category].push(val);
                  if (cat.indexOf(category) === -1) {
                    cat.push(category);
                  }
                })
              }
            })
          });
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

  private db_updateOrCreateLineItem(id: string, lineItemRepr: any) {
    hoodie.store.find(id).then((lineItem) => {
      lineItemRepr.id = id;
      // merge categories
      lineItemRepr.categories = Array.from(new Set(lineItem.categories.concat(lineItemRepr.categories)));
      this.db_updateLineItem(lineItemRepr);
    }).catch(() => {
      lineItemRepr.id = id;
      this.db_addLineItem(lineItemRepr);
    });
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

  onReorder(category: string) {
    let positions = this.lineItems[category]
      .map((lineItem: LineItem, pos: number, array: LineItem[]) => lineItem.pos)
      .sort();
    let dbItems = this.lineItems[category].map((lineItem: LineItem, pos: number, array: LineItem[]) => {
      let newPos = positions[pos];
      if (newPos !== lineItem.pos) {
        lineItem.pos = newPos;
        return lineItem;
      }
      return null;
    }).filter((lineItem: LineItem, pos: number, array: LineItem[]) => {return lineItem != null});
    this.db_updateLineItems(dbItems);
  }

  getLineItems(): Map<string, LineItem[]> {
    return this.lineItems;
  }

  createLineItem(name: string, qty: number, selected: boolean, category: string): void {
    const id = name.toLowerCase();
    const lineItem = new LineItem();
    lineItem.qty = qty;
    lineItem.name = name;
    lineItem.selected = selected;
    lineItem.categories.push(category);
    this.db_updateOrCreateLineItem(name, lineItem);
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
