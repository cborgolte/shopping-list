import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[];
  categoryInput = new FormControl('');

  constructor(private shoppingListService: ShoppingListService,
    private changeDetectorRefs: ChangeDetectorRef,
    private dragulaService: DragulaService) { }

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
      this.changeDetectorRefs.detectChanges();
    });
    this.dragulaService.drop().subscribe((value) => {
      this.categories.forEach((v, i) => this.shoppingListService.updateCategory(v._id, {pos: i}));
    });
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
