import {Injectable} from '@angular/core';
import { LineItem } from './line-item';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';



const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class ShoppingListService { 
  public obsCategories = new BehaviorSubject<any[]>([]);
  public obsLineItems = new BehaviorSubject<Map<string, LineItem[]>>(new Map<string, LineItem[]>());

  constructor() {

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

    // collect all category entries
    let categories = items.filter((element) => element.type === 'Category')
      .sort((lhs: any, rhs: any) => lhs.pos - rhs.pos);

    // collect items per category
    dbItems.forEach((val: LineItem) => {
      if (val.categories) {
        val.categories.forEach((category) => {
          if (!lineItems[category]) {
            lineItems[category] = [];
          }
          lineItems[category].push(val);
          // if there is an item w/ an unknown category, add this category to our list
          if (categories.findIndex((value) => value.name === category) === -1) {
            categories.push({name: category, __state: 'from_item'});
          }
        });
      }
    });
    // inform subscribers
    this.obsLineItems.next(lineItems);
    this.obsCategories.next(categories);
  }

  private dbHasChanged = () => {
    hoodie.store.findAll().then(this.init);
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
    let lineItems: Map<string, LineItem[]> = this.getLineItems();
    let positions = lineItems[category]
      .map((lineItem: LineItem, pos: number, array: LineItem[]) => lineItem.pos)
      .sort();
    let dbItems = lineItems[category].map((lineItem: LineItem, pos: number, array: LineItem[]) => {
      let newPos = positions[pos];
      if (newPos !== lineItem.pos) {
        lineItem.pos = newPos;
        return lineItem;
      }
      return null;
    }).filter((lineItem: LineItem, pos: number, array: LineItem[]) => {return lineItem != null;});
    this.db_updateLineItems(dbItems);
  }

  private getLineItems(): Map<string, LineItem[]> {
    let lineItems: Map<string, LineItem[]>;
    this.obsLineItems.subscribe((items)=> lineItems = items);
    return lineItems;
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

  private getCategories(): any[] {
    let categories: any[];
    this.obsCategories.subscribe( (cat) => {
      categories = cat;
    });
    return categories;
  }

  createCategory(name: string): void {
    const categories = this.getCategories().filter((cat) => cat._id);
    const id = encodeURIComponent(name.toLowerCase());
    const index = categories.findIndex((val) => val._id === id);
    if (index === -1) {
      hoodie.store.updateOrAdd(id, { type: 'Category', name: name, pos: categories.length });
    }
  }

  removeCategory(id: string): void {
    const cat = this.getCategories().find((val) => val._id === id);
    if (!cat.isDefault) {
      hoodie.store.remove({ _id: id });
    }
  }

  updateCategory(id: string, options: any): void {
    hoodie.store.find(id).then( (category) => {
      Object.keys(options).forEach( (key) => {
        const value = options[key];
        category[key] = value;
      });
      hoodie.store.update(id, category);
    });
  }
};