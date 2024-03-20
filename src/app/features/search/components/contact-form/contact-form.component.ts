import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sm-contact-form',
  template: `
    <form #contactForm="ngForm" (submit)="send.emit(contactForm.value)">
      <input
        type="text"
        placeholder="Your email*"
        [ngModel]
        name="email"
        required
      />
      <textarea
        cols="20"
        rows="6"
        placeholder="Your message*"
        [ngModel]
        name="message"
        required
      ></textarea>
      <button type="submit" [disabled]="contactForm.invalid">SEND</button>
    </form>
  `,
  styles: [],
})
export class ContactFormComponent {
  @Output() send = new EventEmitter<any>();
}
