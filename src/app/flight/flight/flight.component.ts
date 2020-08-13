import {Component, Inject, OnInit} from '@angular/core';
import {FlightService} from "../flight.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/internal/operators";
import {Flight} from "../flight.model";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flight: Flight;


  constructor(private flightService: FlightService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {flight: Flight }) => this.flight = data.flight);
  }
}
