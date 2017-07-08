import { Component } from '@angular/core';
import { LineItem } from './line-item';
import { ShoppingListService } from './shopping-list.service';
import { AccountService } from './account/account.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [DragulaService],
  providers: []
})
export class AppComponent {

  private user: any;
  constructor(private accountService: AccountService) {
    this.user = accountService.getAccount();
  }

  username(): string {
    return this.user.username;
  }

  loggedIn(): boolean {
    return this.user.logged_in;
  }

  setUser() {
    this.user = this.accountService.getAccount();
  }

}
