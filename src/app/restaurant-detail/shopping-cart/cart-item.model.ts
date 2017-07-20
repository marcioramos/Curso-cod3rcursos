import { MenuItem } from './../menu-item/menu-item.model';

export class CartItem {

  constructor(
    public menuItem: MenuItem,
    public quatity = 1) {}

    value(): number {
      return this.menuItem.price * this.quatity;
    }

}
