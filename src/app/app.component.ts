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
  lineItem = new LineItem();
}
