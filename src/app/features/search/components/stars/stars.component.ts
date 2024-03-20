import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'sm-stars',
  template: `
    <div>
      <i
        *ngFor="let star of 5 | intToArray; let i = index"
        class="icon"
        [ngClass]="{
                  'ion-ios-star': i < (stars ?? 0),
                  'ion-ios-star-outline': i >= (stars ?? 5),
                }"
      ></i>
    </div>
  `,
  styles: [],
})
export class StarsComponent {
  @Input() stars?: number;
}
