import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HoodieService } from '../common/service/hoodie.service';

@Injectable()
export class AccountService {

    public obsAccount = new Subject<any>();

    constructor(private hoodieService: HoodieService) {

        this.hoodieService.accountGet(['session', 'username'], { local: true })
            .then((properties) => {
                if (properties.session) {
                    this.setUser(properties.username);
                } else {
                    this.clearUser();
                }
            }).catch(() => this.clearUser());
    }

    private setUser(username: string) {
        const account = {
            username: username,
            logged_in: true
        };
        this.obsAccount.next(account);
    }

    private clearUser() {
        const account = {
            username: '',
            logged_in: false
        };
        this.obsAccount.next(account);
    }

    public signUp(username: String, password: String): any {

        const options = { username: username, password: password };
        return this.hoodieService.accountSignUp(options)
            .then((sessionProp) => {
                this.setUser(sessionProp.username);
            })
            .catch((error) => {
                this.signOut();
                alert('sign up failed: ' + error);
            });
    }

    public signIn(username: String, password: String): any {

        const options = { username: username, password: password };
        return this.hoodieService.accountSignIn(options)
            .then((sessionProp) => {
                this.setUser(sessionProp.username);
            })
            .catch((error) => {
                this.signOut();
                alert('log in failed: ' + error);
            });
    }

    public signOut(): void {
        this.hoodieService.accountSignOut().then(() => {
            this.clearUser();
        });
    }
}
