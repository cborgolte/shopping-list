import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { ShoppingListService } from '../shopping-list.service';
import { elementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: any[];
  categoryInput = new FormControl('');

  constructor(private shoppingListService: ShoppingListService,
    private changeDetectorRefs: ChangeDetectorRef,
    private dragulaService: DragulaService) { }

  ngOnInit() {
    this.shoppingListService.obsCategories.subscribe((cat) => {
      this.categories = cat;
      this.detectChanges();
    });

    this.dragulaService.drop().subscribe((value) => {

      let siblingPos = this.categories.length;

      if (value.sibling) {
        const sibling = value.sibling.attributes.getNamedItem('data-category').value;
        siblingPos = this.categories.findIndex(e => e.name === sibling);
      }

      const element = value.el.attributes.getNamedItem('data-category').value;
      const elementPos = this.categories.findIndex(e => e.name === element);

      let newOrder: any[];
      if (elementPos > siblingPos) {
        newOrder = this.categories.slice(0, siblingPos)
          .concat(this.categories.slice(elementPos, elementPos + 1))
          .concat(this.categories.slice(siblingPos, elementPos))
          .concat(this.categories.slice(elementPos + 1));
      } else {
        newOrder = this.categories.slice(0, elementPos)
          .concat(this.categories.slice(elementPos + 1, siblingPos))
          .concat(this.categories.slice(elementPos, elementPos + 1))
          .concat(this.categories.slice(siblingPos));
      }
      newOrder.forEach((v, i) => this.shoppingListService.updateCategory(v._id, {pos: i}));
    });
  }

  ngOnDestroy(): void {
    this.changeDetectorRefs.detach();
  }

  private detectChanges(): void {
    if (!this.changeDetectorRefs['destroyed']) {
      this.changeDetectorRefs.detectChanges();
    }
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
