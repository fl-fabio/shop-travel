import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sm-card',
  template: `
    <div>
        <div class="title" *ngIf="title">{{ title }}</div>
        <div [ngClass]="{
          'content': padding,
          'center': isCentered
        }">
          <ng-content></ng-content>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent {
  @Input() title?: string;
  @Input() isScrollable?: boolean;
  @Input() customClass?: string;
  @Input() isCentered?: boolean;
  @Input() padding = true;

  @HostBinding('className') get className() {
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customClass ? ' ' + this.customClass : '';
    return cls
  }
}
