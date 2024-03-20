import { Component } from '@angular/core';
import { CartService } from './core/services/cart.service';
import { Authservice } from './core/services/auth.service';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public cart: CartService,
    public auth: Authservice
    ) {}
}
