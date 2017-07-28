import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => this.categories.push(cat));
    this.shoppingListService.obsCategories.subscribe((cat) => console.log(cat));
  }

  onEnter(input: any) {
    let category = input.value.trim();
    this.shoppingListService.createCategory(category);
    // clear input
    input.value = "";
  }

  getCategories(): any[] {
    return this.categories;
  }

}
