import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';



@NgModule({
  declarations: [FlightComponent],
  exports: [FlightComponent],
  imports: [
    CommonModule
  ],
})
export class FlightModule { }
