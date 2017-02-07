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
  providers: [ShoppingListService, AccountService]
})
export class AppComponent {

  title = 'Shopping List';
  accountService: AccountService
  user: any = null;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
    this.user = accountService.getAccount();
  }

}
