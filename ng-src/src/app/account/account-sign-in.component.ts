import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
    selector: 'sign-in',
    templateUrl: './account-sign-in.component.html',
    providers: [AccountService]
})
export class AccountSignInComponent {

    account = {
        username: "",
        password: "",
    };

    constructor(private accountService: AccountService) { }

    signIn(): void {
        console.log(this.account);
        this.accountService.signIn(this.account.username, this.account.password)
        .then( () => {console.log("TODO: redirect");})
    }
}