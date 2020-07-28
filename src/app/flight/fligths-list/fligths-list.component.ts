import { Component, OnInit } from '@angular/core';
import {FlightService} from "../flight.service";
import {Flight} from "../models/flight.model";

@Component({
  selector: 'app-fligths-list',
  templateUrl: './fligths-list.component.html',
  styleUrls: ['./fligths-list.component.scss']
})
export class FligthsListComponent implements OnInit {
   flights: Flight[];
displayedColums = ['flightNumber', 'departureCity',   'arrivalCity'];
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.listFlight().pipe().subscribe(flights => this.flights = flights);
  }

}
