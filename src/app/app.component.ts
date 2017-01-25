import { Component } from '@angular/core';

export class LineItem {
  id: number;
  qty: number;
  // unit: string;
  name: string;
  selected: boolean;
  // bought: boolean;
  // categories: Array<string>;
}

const LINE_ITEMS : LineItem[] = [
  {
    id: 1,
    qty: 1,
    name: "Kartoffeln",
    selected: false
  },
  {
    id: 2,
    qty: 5,
    name: "Zwiebeln",
    selected: true
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Shopping List';
  lineItems = LINE_ITEMS;

  // handle entering a new item
  onEnter(input: any) { 
    let value = input.value;
    let amount = parseInt(value.split(' ', 1));
    if (!isNaN(amount)) {
      let valueSplitted = value.split(' ');
      value = valueSplitted.slice(1).join(' ');
    }
    else {
      amount = 1;
    }
    let lineItem = new LineItem();
    lineItem.id = this.lineItems[this.lineItems.length-1].id + 1;
    lineItem.qty = amount;
    lineItem.name = value;
    lineItem.selected = true;
    LINE_ITEMS.push(lineItem);
    // clear input
    input.value = "";
  }

  // decrease item quantity
  decrease(item: any) {
    const minValue = 1;
    if (item.qty > minValue) {
      item.qty -= 1;
    }
  }

  // increase item quantity
  increase(item: LineItem) {
    if (item.qty === undefined || item.qty === null) {
      item.qty = 0;
    }
    item.qty += 1;
  }

  // remove item from list
  remove(item: LineItem) {
    // TODO  
    // this.lineItems.remove(item);
  }
}
