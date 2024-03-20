import { Injectable, inject } from "@angular/core";
import { CartItem } from "src/app/models/cart-item";
import { Hotel, Room } from "src/app/models/hotel";
import { Authservice } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    items: CartItem[]= [];
    auth = inject(Authservice);

    addToCart(hotel: Hotel, room: Room) {
/*         this.items.push({
            hotel: hotel,
            room: room,
            creationDate: Date.now()
        }) */
        this.items = [...this.items, 
            {
                hotel: hotel,
                room: room,
                creationDate: Date.now()
            }
        ];
    }

    removeFromCart (cartItem: CartItem) {
        this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate);
    }

    proceed() {
        window.alert(`
            Total items: ${this.items.length}
            Order: ${this.auth.data?.name}
        `
        );
    }
}