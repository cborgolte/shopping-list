import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LineItem } from '../models/line-item';
import { HoodieService } from '../service/hoodie.service';

@Injectable()
export class ShoppingListService {
  public obsCategories = new BehaviorSubject<any[]>([]);
  public obsLineItems = new BehaviorSubject<Map<string, LineItem[]>>(new Map<string, LineItem[]>());

  constructor(private hoodieService: HoodieService) {

    // initalize db
    this.dbHasChanged();

    //// Events

    // Handle store changes
    hoodieService.storeOn('change', () => this.dbHasChanged());

    // Load new user's data after a new user signs in
    hoodieService.accountOn('signin', (accountProperties) => {
      // HACK: always provide an 'all' category
      hoodieService.storeUpdateOrAdd('all',
       { type: 'Category', isDefault: true, name: 'all', visible: true, pos: 1000 });

      // init db
      this.dbHasChanged();
    });

    // Clear data after a user signs out
    hoodieService.accountOn('signout', (accountProperties) => this.init([]));
  }

  private init(items: any[]) {
    const lineItems = new Map<string, LineItem[]>();

    // retrieve all line items
    const dbItems = items.filter((element, index, array) => {
      const retval = element.type === 'LineItem';
      return retval;
    }).sort((lhs, rhs) => lhs.pos - rhs.pos);

    // collect all category entries
    const categories = items.filter((element) => element.type === 'Category')
      .sort((lhs: any, rhs: any) => lhs.pos - rhs.pos);

    // collect items per category
    dbItems.forEach((val: LineItem) => {
      val.meta = val.meta || {boughtAt: []};
      val.meta.boughtAt = val.meta.boughtAt || [];
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

  private dbHasChanged() {
    this.hoodieService.storeFindAll().then((vals) => this.init(vals));
  }

  private db_updateOrCreateLineItem(id: string, lineItemRepr: any) {
    this.hoodieService.storeFind(id).then((lineItem) => {
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
    this.hoodieService.storeAdd(lineItemRepr);
  }

  private db_updateLineItem(lineItem: LineItem): void {
    const lineItemRepr = (<any>lineItem);
    this.hoodieService.storeUpdate(lineItemRepr._id, lineItem);
  }

  private db_updateLineItems(lineItems: LineItem[]): void {
    const lineItemsRepr = (<any[]>lineItems);
    this.hoodieService.storeUpdate(lineItemsRepr);
  }

  private db_deleteLineItem(lineItem: LineItem) {
    const lineItemRepr = (<any>lineItem);
    this.hoodieService.storeRemove({_id: lineItemRepr._id});
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
    const items = lineItems.map((item) => {
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
      this.hoodieService.storeUpdateOrAdd(id,
         { type: 'Category', name: name, pos: categories.length });
    }
  }

  removeCategory(id: string): void {
    const cat = this.getCategories().find((val) => val._id === id);
    if (!cat.isDefault) {
      this.hoodieService.storeRemove({ _id: id });
    }
  }

  updateCategory(id: string, options: any): void {
    this.hoodieService.storeFind(id).then( (category) => {
      Object.keys(options).forEach( (key) => {
        const value = options[key];
        category[key] = value;
      });
      this.hoodieService.storeUpdate(id, category);
    });
  }
}
