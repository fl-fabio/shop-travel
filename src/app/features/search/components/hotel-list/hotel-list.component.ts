import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'sm-hotel-list',
  template: `
    <div class="font-big">Hotel in {{ text }}</div>

    <p>{{ date | date:'dd/MM/yyyy':'UTC +9'  }}</p>
    <div
      class="horiz-grid separator"
      *ngFor="let hotel of hotels"
      (click)="setActive.emit(hotel)"
      [ngClass]="{ active: hotel.id === active?.id }"
    >
      <div>{{ hotel.name }}</div>
      <div>da {{ hotel.rooms[0].price }}</div>
    </div>

    <div class="separator"></div>
    <div class="horiz-grid">
      <div></div>
      <em>{{ hotels?.length }} results</em>
    </div>
  `,
  styles: [],
})
export class HotelListComponent {
  @Input() hotels?: Hotel[];
  @Input() active?: Hotel;
  @Input() text?: string;
  @Output() setActive = new EventEmitter<Hotel>();

  date = new Date();

}
