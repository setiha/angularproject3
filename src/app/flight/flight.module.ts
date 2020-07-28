import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FligthsListComponent } from './fligths-list/fligths-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [FlightComponent, FligthsListComponent],
  exports: [FlightComponent,
  FligthsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
})
export class FlightModule { }
