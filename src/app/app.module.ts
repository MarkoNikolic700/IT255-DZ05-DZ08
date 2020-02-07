import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HelpersPipe } from './filter/helpers.pipe';
import { DodajHotelComponent } from './dodaj-hotel/dodaj-hotel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HotelService} from './hotel.service';
import {RoomServiceService} from './services/room-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HelpersPipe,
    DodajHotelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HotelService, RoomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
