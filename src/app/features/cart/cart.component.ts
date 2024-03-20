import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'sm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    public cart: CartService) {
    console.log(this.cart)
  }

  removeFromCart(item: CartItem) {
    this.cart.removeFromCart(item);
  }
}
