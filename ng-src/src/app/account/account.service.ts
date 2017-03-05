import {Injectable, Component, NgZone} from '@angular/core';

// HACK: Get a handle to the hoodie client
const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class AccountService {

    private account: any = {}

    constructor(private zone: NgZone) { 
        console.log("AcountService constructor");
        _window.XXX = this.account;
        _window.AAA = this;
        hoodie.ready.then( () => {
            if (hoodie.account.isSignedIn()) {
                this.setUser(hoodie.account.username);
            }
            else {
                this.clearUser();
            }
        });
  }

  private setUser(username: string) {
      this.zone.run( () => {
          this.account.username = username;
          this.account.logged_in = true;
          console.log(this.account);
      });
  }

  private clearUser() {
      this.zone.runOutsideAngular( () => {
          this.account.username = "";
          this.account.logged_in = false;
          // for (let attr in this.account) {
          //     delete (this.account[attr]);
          // }
      });
  }

  public signIn(username: String, password: String): any {

      let options = { username: username, password: password };
      return hoodie.account.signIn(options)
          .then((sessionProp) => {
              console.log("logged in as " + sessionProp.username);
              this.setUser(sessionProp.username);
          })
          .catch((error) => {
              console.log("log in failed " + error);
              this.signOut();
          });
    }

  public getAccount(): any {
      return this.account;
  }

  public signOut(): void {
      hoodie.account.signOut().then(() => {
          this.clearUser();
      });
  }
}
