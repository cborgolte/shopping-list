import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list-modify.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  title = 'Shopping List';
  private lineItems = new Map<string, LineItem[]>();
  private categories: any[] = [];
  private activeTab: string;

  constructor(
    private shoppingListService: ShoppingListService,
    private changeDetectorRefs: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.shoppingListService.obsLineItems.subscribe((lineItems) => {
      this.lineItems = lineItems;
      console.log('+++kjdljdlkjflkdjf',lineItems);
      console.log('---kjdljdlkjflkdjf');
      this.detectChanges();
    });
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
      this.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.changeDetectorRefs.detach();
  }

  private detectChanges(): void {
    if (!this.changeDetectorRefs['destroyed']) {
      this.changeDetectorRefs.detectChanges();
    }
  }

  updateLineItem(event, item: LineItem) {
    const displayLocationInfo = (position) => {
      item.meta.boughtAt.push({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        speed: position.coords.speed,
        heading: position.coords.heading,
        accuracy: position.coords.accuracy,
        timestamp: new Date(position.timestamp)
      });
      this.shoppingListService.updateLineItem(item);
    };
    if (item.bought && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    } else {
      this.shoppingListService.updateLineItem(item);
    }
  }

  // return line items that were selected for the shopping list
  getLineItems = (category: string) =>  {
    if (this.lineItems && this.lineItems[category]) {
      const items = this.lineItems[category].filter((item: LineItem) => item.selected);
      items.sort((lhs: LineItem, rhs: LineItem) => {
        const catRhs = rhs.categories.find((cat) => cat !== 'all');
        const catLhs = lhs.categories.find((cat) => cat !== 'all');
        if (catLhs > catRhs) {
          return 1;
        }
        if (catLhs < catRhs) {
          return -1;
        }
        return 0;
      });
      return items;
    }
    return [];
  }

  getVisibleCategories(): any[] {
    return this.categories
      .filter(c => c.visible)
      .filter(c => this.getLineItems(c.name).length > 0);
  }

  // track items
  trackLineItems(index: number, lineItem: LineItem): string {
    const lineItemRepr = (<any>lineItem);
    return lineItemRepr._id;
  }

  trackCategory(index: number, category: any): string {
    return category._id;
  }

  // done - clear bought items from list
  done(category: string) {
    const bought = this.lineItems[category].filter((item: LineItem) => item.bought);
    this.shoppingListService.resetLineItems(bought);
  }
}
