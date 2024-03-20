import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'sm-gmap',
  template: `
    <div NgStyle="{width: '100%', height: '300px'}">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101303.19542605229!2d14.99511767307536!3d37.49081874542976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2dd761525b5%3A0x58fe876151c83cf0!2sCatania%20CT!5e0!3m2!1sit!2sit!4v1710004905109!5m2!1sit!2sit"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="address">
      <div class="font-big">{{ active?.name }}</div>
      <div class="font-small">{{ active?.location?.address }}</div>
    </div>
  `,
  styles: [],
})
export class GmapComponent {
  @Input() active?: Hotel;
}
