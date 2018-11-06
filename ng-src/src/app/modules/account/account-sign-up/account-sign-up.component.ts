import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-sign-up',
  templateUrl: './account-sign-up.component.html',
  styleUrls: ['./account-sign-up.component.css']
})
export class AccountSignUpComponent implements OnInit {

    // ngModel
    account = {
        username: '',
        password: '',
    };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  signUp(): void {
        this.accountService.signUp(this.account.username, this.account.password)
        .then( () => this.accountService.signIn(this.account.username, this.account.password) )
        .then( () => {
            // TODO: check for redirect URL in query parameters
            this.router.navigate(['/modify']);
        });
    }

}
