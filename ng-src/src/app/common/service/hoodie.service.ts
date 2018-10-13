import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HoodieService {
  _window: any = (<any>window);
  hoodie: any = this._window.hoodie;

  constructor() { }

  // account ...

  accountSignUp(options: { username: String; password: String; }): Promise<any> {
    return this.hoodie.account.signUp(options);
  }

  accountSignIn(options: { username: String; password: String; }): Promise<any> {
    return this.hoodie.account.signIn(options);
  }

  accountSignOut(): Promise<any> {
    return this.hoodie.account.signOut();
  }

  accountOn(eventName: String, handler) {
    return this.hoodie.account.on(eventName, handler);
  }

  accountGet(path: String|String[], options: Object): Promise<any> {
    return this.hoodie.account.get(path, options);
  }

  // store ...

  storeOn(eventName: String, handler): any {
    return this.hoodie.store.on(eventName, handler);
  }

  storeUpdateOrAdd(id: String, property: Object) {
    return this.hoodie.updateOrAdd(id, property);
  }

  storeFindAll(): Promise<any> {
    return this.hoodie.store.findAll();
  }

  storeFind(id: String): Promise<any> {
    return this.hoodie.store.find(id);
  }

  storeAdd(doc: Object): Promise<any> {
    return this.hoodie.store.add(doc);
  }

  storeUpdate(id_or_doc: String|Object, doc?: Object): any {
    if (doc) {
      return this.hoodie.store.update(id_or_doc, doc);
    } else {
      return this.hoodie.store.update(id_or_doc);
    }
  }

  storeRemove(filter: Object): any {
    return this.hoodie.store.remove(filter);
  }
}
