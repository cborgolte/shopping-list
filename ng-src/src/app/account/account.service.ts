import {Injectable, Component, NgZone} from '@angular/core';

// HACK: Get a handle to the hoodie client
const _window: any = (<any>window);
const hoodie: any = _window.hoodie;

@Injectable()
export class AccountService {

    private account: any = {}

    constructor(private zone: NgZone) { 
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

  public getAccount(): any {
      return this.account;
  }

  public signOut(): void {
      hoodie.account.signOut().then(() => {
          this.clearUser();
      });
  }
}
