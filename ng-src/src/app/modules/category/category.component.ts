import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShoppingListService } from '../../shared/service/shopping-list.service';
import { CdkDragDrop, moveItemInArray, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[];
  categoryInput = new FormControl('');

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
    });
  }

  onSubmit() {
    const category = this.categoryInput.value;
    this.shoppingListService.createCategory(category);
    this.categoryInput.setValue('');
  }

  trackCategory(index: number, category: any): string {
    return category.name;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    this.categories.forEach(
      (val, index) => this.shoppingListService.updateCategory(val._id, { pos: index }));
  }
}
