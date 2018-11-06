import { Component } from '@angular/core';
import { LineItem } from './shared/models/line-item';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { AccountService } from './modules/account/account.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [DragulaService],
  providers: []
})
export class AppComponent {

  private user: any = {};
  constructor(private accountService: AccountService) {
    this.accountService.obsAccount.subscribe((user) => this.user = user);
  }

  username(): string {
    return this.user.username;
  }

  loggedIn(): boolean {
    return this.user.logged_in;
  }
}
