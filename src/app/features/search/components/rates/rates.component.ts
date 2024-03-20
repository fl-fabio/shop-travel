import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'sm-rates',
  template: `
    <div class="font-superbig">
      {{ active?.rate }}
      <i class="ion-ios-person"></i>
    </div>
  `,
  styles: [],
})
export class RatesComponent {
  @Input() active?: Hotel
}
