import {Injectable} from '@angular/core';
import { LineItem } from './line-item';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subscription } from 'rxjs/Subscription';


const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class ShoppingListService {
  lineItems: Map<string, LineItem[]>;

  categories: any[] = [
    {
      name: 'Obst + Gemüse',
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
      name: 'Tiefkühl',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Bad',
      updated: new Date('1/18/16'),
    },
    {
      name: 'Haushaltswaren',
      updated: new Date('1/28/16'),
    },
    {
      name: 'sonstiges',
      updated: new Date('2/20/16'),
    },
    {
      name: 'all',
      updated: new Date('1/18/16'),
    }
  ];
  public obsCategories = Observable.from(this.categories);
  public obsLineItems = new BehaviorSubject<Map<string, LineItem[]>>(new Map<string, LineItem[]>());

  constructor() {

    // TODO: this.obsCategories.subscribe( (val) => this.categories = val);
    this.obsLineItems.subscribe( (val) => this.lineItems = val);

    // initalize db
    this.dbHasChanged();

    //// Events

    // Handle store changes
    hoodie.store.on('change', this.dbHasChanged);

    // Load new user's data after a new user signs in
    hoodie.account.on('signin', (accountProperties) => {
      this.init([]);
    });

    // Clear data after a user signs out
    hoodie.account.on('signout', (accountProperties) => {
      this.init([]);
    });
  }

  private init = (items: any[]) => {
    let lineItems = new Map<string, LineItem[]>();

    // retrieve all line items
    let dbItems = items.filter((element, index, array) => {
      let retval = element.type === 'LineItem';
      return retval;
    }).sort((lhs, rhs) => lhs.pos - rhs.pos);

    // collect all category entries (not implemented yet)
    let dbCategories = items.filter((element) => element.type === 'Category')
      .sort((lhs: any, rhs: any) => lhs.pos - rhs.pos)
      .map((c) => c.name);

    // add all db categories
    Array.prototype.push.apply(this.categories, dbCategories);

    // collect items per category
    dbItems.forEach((val: LineItem) => {
      if (val.categories) {
        val.categories.forEach((category) => {
          if (!lineItems[category]) {
            lineItems[category] = [];
          }
          lineItems[category].push(val);
          if (this.categories.findIndex((value) => value.name === category) === -1) {
            this.categories.push(category);
          }
        });
      }
    });
    // inform subscribers
    this.obsLineItems.next(lineItems);
  }

  private dbHasChanged = () => {
    hoodie.store.findAll().then(this.init);
  }

  public getCategories(): any[] {
    return this.categories;
  }

  private db_updateOrCreateLineItem(id: string, lineItemRepr: any) {
    hoodie.store.find(id).then((lineItem) => {
      lineItemRepr._id = id;
      // merge categories
      lineItemRepr.categories = Array.from(new Set(lineItem.categories.concat(lineItemRepr.categories)));
      this.db_updateLineItem(lineItemRepr);
    }).catch(() => {
      lineItemRepr._id = id;
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
      lineItemRepr._id,
      lineItem
    );
  }

  private db_updateLineItems(lineItems: LineItem[]): void {
    const lineItemsRepr = (<any[]>lineItems);
    hoodie.store.update(lineItemsRepr);
  }

  private db_deleteLineItem(lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    hoodie.store.remove({_id: lineItemRepr._id});
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
    }).filter((lineItem: LineItem, pos: number, array: LineItem[]) => {return lineItem != null;});
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
    this.db_updateOrCreateLineItem(id, lineItem);
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