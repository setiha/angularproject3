
import {Component, OnInit} from '@angular/core';
import {FlightService} from "../flight.service";
import {Flight} from "../flight.model";
import {debounceTime, map, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FligthListComponent implements OnInit {
  flights: Flight[];
  displayedColums = ['flightNumber', 'departureCity', 'arrivalCity'];

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.flightService.listFlight()
      .pipe(
        debounceTime(400),
        map(flights => Object.keys(flights).map(flight => flights [flight])),
        tap(() => console.log('do something'))
      )
      .subscribe(flights => {
        this.flights = flights;
      });
  }

}
