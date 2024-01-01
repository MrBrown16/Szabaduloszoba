import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NewreservationComponent } from './newreservation/newreservation.component';
import { FormsModule } from '@angular/forms';
import { BuComponent } from './bu/bu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent,
    NewreservationComponent,
    BuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
