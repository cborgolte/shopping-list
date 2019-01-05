import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { LineItem } from '../../../shared/models/line-item';
import { ShoppingListService } from '../../../shared/service/shopping-list.service';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css']
})
export class ChecklistItemComponent implements OnInit {

  @Input() item: any;

  constructor(
    private shoppingListService: ShoppingListService,
    private location: Location
  ) { }

  ngOnInit() {
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
}
