///<reference path="../../../../node_modules/rxjs/internal/operators/debounceTime.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FlightService} from "../flight.service";
import {Flight} from "../models/flight.model";
import {debounceTime, map, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-fligths-list',
  templateUrl: './fligths-list.component.html',
  styleUrls: ['./fligths-list.component.scss']
})
export class FligthsListComponent implements OnInit {
  flights: Flight[];
  displayedColums = ['flightNumber', 'departureCity', 'arrivalCity'];

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.flightService.listFlight()
      .pipe(
        debounceTime(400),
        map(flights => flights.map(flight => {
          delete flight.delay;
          return flight;
        })),
        tap(() => console.log('do something'))
      )
      .subscribe(flights => {
        console.log(flights);
        this.flights = flights;
      });
  }

}
