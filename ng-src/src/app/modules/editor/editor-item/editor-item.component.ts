import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../../../shared/models/line-item';
import { ShoppingListService } from '../../../shared/service/shopping-list.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-editor-item',
  templateUrl: './editor-item.component.html',
  styleUrls: ['./editor-item.component.css']
})
export class EditorItemComponent implements OnInit {

  @Input() item: LineItem;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

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

  // remove item from list
  remove(item: LineItem) {
    this.shoppingListService.removeItem(item);
  }

}
