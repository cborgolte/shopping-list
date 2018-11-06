import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { ShoppingListService } from '../shopping-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: any[];
  categoryInput = new FormControl('');

  constructor(private shoppingListService: ShoppingListService,
    private dragulaService: DragulaService) { }

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
    });
  }

  ngOnDestroy(): void {}

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    this.categories.forEach((v, i) => this.shoppingListService.updateCategory(v._id, { pos: i }));
  }


  onSubmit() {
    const category = this.categoryInput.value;
    this.shoppingListService.createCategory(category);
    this.categoryInput.setValue('');
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
