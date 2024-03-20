import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Hotel, Room } from 'src/app/models/hotel';

@Component({
  selector: 'sm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Milan';
  hotels: Hotel[] | undefined;
  active: Hotel | undefined;
  activeImage: string | undefined;

  constructor(
    private http: HttpClient,
    private cart: CartService
  ) {
    this.searchHotels(this.text);
    console.log(this.cart)
  }

  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>(`http://localhost:3000/hotels?city=${text.toLowerCase()}`)
      .subscribe(result => {
        this.hotels = result;
        this.setActive(this.hotels[0]);
      })
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage = hotel.images[0]
  }

  sendEmail({email, message}: {email: string, message: string}) {
    window.alert(`sent: 
    ${email}
    ${message},
    to ${this.active?.email}`);
  }

  addToCart(room: Room, active: Hotel) {
    this.cart.addToCart(active, room)
  }
}
