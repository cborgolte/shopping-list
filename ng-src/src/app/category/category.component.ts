import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[];

  constructor(private shoppingListService: ShoppingListService, private dragulaService: DragulaService) {}

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => this.categories = cat);
    this.dragulaService.drop().subscribe((value) => {
      this.categories.forEach((v, i) => this.shoppingListService.updateCategory(v._id, {pos: i}));
    });
  }

  onEnter(input: any) {
    let category = input.value.trim();
    this.shoppingListService.createCategory(category);
    // clear input
    input.value = "";
  }

  save(name: string) {
    this.shoppingListService.createCategory(name);
  }

  trackCategory(index: number, category: any): string {
    return category.name;
  }

  remove(category: string) {
    this.shoppingListService.removeCategory(category);
  }

  visible(id: string, val: boolean): void {
    this.shoppingListService.updateCategory(id, {visible: val});
  }

}
