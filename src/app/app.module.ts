import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "@angular/compiler";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {FlightModule} from "./flight/flight.module";
import {ComplaintModule} from "./complaint/complaint.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, FlightModule, ComplaintModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
