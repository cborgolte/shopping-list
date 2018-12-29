import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../../shared/service/shopping-list.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: any;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  save(name: string) {
    this.shoppingListService.createCategory(name);
  }

  remove(category: string) {
    this.shoppingListService.removeCategory(category);
  }

  visible(id: string, val: boolean): void {
    this.shoppingListService.updateCategory(id, {visible: val});
  }

}
