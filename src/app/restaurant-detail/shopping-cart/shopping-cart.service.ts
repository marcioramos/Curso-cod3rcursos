import { Injectable } from '@angular/core';

import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { MenuItem } from './../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() { }

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem: CartItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItem) {
    item.quatity += 1;
  }

  decreaseQty(item: CartItem) {
    item.quatity -= 1;
    if (item.quatity === 0) {
      this.removeItem(item);
    }
  }

}
