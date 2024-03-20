import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel, Room } from 'src/app/models/hotel';

@Component({
  selector: 'sm-reservations',
  template: `
    <div
      class="horiz-grid separator"
      *ngFor="let room of active?.rooms"
      (click)="addToCart.emit(room)"
    >
      <div>{{ room.label }}</div>
      <div>
        {{ room.price }}
        <i class="ion-ios-cart"></i>
      </div>
    </div>
  `,
  styles: [],
})
export class ReservationsComponent {
  @Input() active?: Hotel;
  @Output() addToCart = new EventEmitter<Room>();
}
