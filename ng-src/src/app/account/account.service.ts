import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// HACK: Get a handle to the hoodie client
const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class AccountService {

    public obsAccount = new Subject<any>();

    constructor() {

        hoodie.account.get(['session', 'username'], { local: true })
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
            username: "",
            logged_in: false
        };
        this.obsAccount.next(account);
    }

    public signUp(username: String, password: String): any {

        let options = { username: username, password: password };
        return hoodie.account.signUp(options)
            .then((sessionProp) => {
                this.setUser(sessionProp.username);
            })
            .catch((error) => {
                this.signOut();
                alert("sign up failed: " + error);
            });
    }

    public signIn(username: String, password: String): any {

        let options = { username: username, password: password };
        return hoodie.account.signIn(options)
            .then((sessionProp) => {
                this.setUser(sessionProp.username);
            })
            .catch((error) => {
                this.signOut();
                alert("log in failed: " + error);
            });
    }

    public signOut(): void {
        hoodie.account.signOut().then(() => {
            this.clearUser();
        });
    }
}
