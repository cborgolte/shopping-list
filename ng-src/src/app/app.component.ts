import { Component } from '@angular/core';
import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [DragulaService],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'Shopping List';
  user = {
    name: "Einar Maleben",
    isLoggedIn: true
  };
}
