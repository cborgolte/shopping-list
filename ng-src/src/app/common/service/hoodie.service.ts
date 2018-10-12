import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HoodieService {
  _window: any = (<any>window);
  hoodie: any = this._window.hoodie;

  constructor() { }

  storeOn(eventName: String, callback): any {
    return this.hoodie.store.on(eventName, callback);
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

  accountOn(eventName: String, callback) {
    return this.hoodie.account.on(eventName, callback);
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
