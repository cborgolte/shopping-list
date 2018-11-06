import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';


@Component({
    selector: 'sign-in',
    templateUrl: './account-sign-in.component.html',
    providers: []
})
export class AccountSignInComponent {

    // ngModel
    account = {
        username: '',
        password: '',
    };

    constructor(
        private accountService: AccountService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    signIn(): void {
        this.accountService.signIn(this.account.username, this.account.password)
        .then( () => {
            // TODO: check for redirect URL in query parameters
            this.router.navigate(['/modify']);
        });
    }
}
