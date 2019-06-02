import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LineItem } from '../../../shared/models/line-item';
import { ShoppingListService } from '../../../shared/service/shopping-list.service';
import { isNgTemplate } from '@angular/compiler';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-editor-item',
  templateUrl: './editor-item.component.html',
  styleUrls: ['./editor-item.component.css']
})
export class EditorItemComponent implements OnInit {

  @Input() item: LineItem;
  @Input() category: any;
  openMenu: EventTarget;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  // decrease item quantity
  decrease(item: LineItem) {
    const minValue = 1;
    if (item.qty > minValue) {
      item.qty -= 1;
    }
    this.shoppingListService.updateLineItem(item);
  }

  // increase item quantity
  increase(item: LineItem) {
    if (item.qty === undefined || item.qty === null) {
      item.qty = 0;
    }
    item.qty += 1;
    this.shoppingListService.updateLineItem(item);
  }

  // remove item from category
  remove(item: LineItem) {
    const categories = item.categories.filter((cat) => cat !== this.category.name);
    item.categories = categories;
    this.shoppingListService.updateLineItem(item);
  }

  updateLineItem(item: LineItem) {
    console.log('update', item);
    this.shoppingListService.updateLineItem(item);
  }

  stopPropagation(event: Event): boolean {
    event.stopPropagation();
    return false;
  }

  nameChanged(item: LineItem, event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      const val = target.value;
      item.name = val;
      this.shoppingListService.updateLineItem(item);
    }
  }
}
