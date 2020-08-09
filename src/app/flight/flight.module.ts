import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {FlightRoutingModule} from "./flight-routing.module";
import {FlightComponent} from "./flight/flight.component";
import {FligthListComponent} from "./fligth-list/fligth-list.component";



@NgModule({
  declarations: [FlightComponent, FligthListComponent],
  exports: [FlightComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    FlightRoutingModule
  ],
})
export class FlightModule { }
