import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { LineItem } from '../../shared/models/line-item';
import { ShoppingListService } from '../../shared/service/shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './checklist.component.html',
  styleUrls: ['../editor/editor.component.css'],
  providers: []
})
export class ChecklistComponent implements OnInit, OnDestroy {
  title = 'Shopping List';
  private lineItems = new Map<string, LineItem[]>();
  private categories: any[] = [];
  private activeTab: string;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.shoppingListService.obsLineItems.subscribe((lineItems) => {
      this.lineItems = lineItems;
    });
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
    });
  }

  ngOnDestroy(): void {
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
