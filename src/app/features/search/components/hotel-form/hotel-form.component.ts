import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sm-hotel-form',
  template: `
    <form #f="ngForm" (submit)="search.emit(f.value.text)">
      <input
        type="text"
        [ngModel]="text"
        name="text"
        placeholder="City (Rome or Milan)"
      />
      <button type="submit">SEARCH</button>
    </form>
  `,
  styles: [],
})
export class HotelFormComponent {
  @Input() text?: string;
  @Output() search = new EventEmitter<string>();
}
