import {Injectable, Component, NgZone} from '@angular/core';

const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class AccountService {

    account: any = {}
    zone: NgZone

    constructor(zone: NgZone) { 
        this.zone = zone;
        hoodie.ready.then( () => {
            console.log("account ready");
            if (hoodie.account.isSignedIn()) {
                this.account.username = hoodie.account.username;
            }
            /// let email = 'oberweg';
            /// let password = '123iu9lksjdf!lkjpi-adfllkj';
            /// this.signIn(email, password);
            /// let options = { username: email, password: password };
            /// hoodie.account.signUp(options)
            ///     .then(() => this.signIn(email, password));
        });
  }

  public signIn(username: String, password: String): any {

        /// let email = 'oberweg';
        /// let password = '123iu9lksjdf!lkjpi-adfllkj';
        let options = { username: username, password: password };
        // hoodie.account.signUp(options)
        // .finally(() => hoodie.account.signIn(options))
        // .then((sessionProp) => console.log("logged in as " + sessionProp.account.username));
        return hoodie.account.signIn(options)
            .then((sessionProp) => {
                console.log("logged in as " + sessionProp.username);
                this.zone.run(() => {
                    this.account.username = sessionProp.username;
                    this.account.logged_in = true;
                });
            })
            .catch( (error) => {
                console.log("log in failed " + error);
            });
    }

    getAccount(): any {
        return this.account;
    }
}
