import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './features/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { IntToArrayPipe } from './shared/pipes/int-to-array.pipe';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { SeparatorComponent } from './features/shared/components/separator/separator.component';
import { GmapComponent } from './features/search/components/gmap/gmap.component';
import { RatesComponent } from './features/search/components/rates/rates.component';
import { StarsComponent } from './features/search/components/stars/stars.component';
import { ReservationsComponent } from './features/search/components/reservations/reservations.component';
import { ImageGalleryComponent } from './features/search/components/image-gallery/image-gallery.component';
import { ServicesComponent } from './features/search/components/services/services.component';
import { ContactFormComponent } from './features/search/components/contact-form/contact-form.component';
import { CardComponent } from './shared/components/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    IntToArrayPipe,
    HotelListComponent,
    HotelFormComponent,
    SeparatorComponent,
    GmapComponent,
    RatesComponent,
    StarsComponent,
    ReservationsComponent,
    ImageGalleryComponent,
    ServicesComponent,
    ContactFormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
