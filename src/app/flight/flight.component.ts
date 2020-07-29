import {Component, Inject, OnInit} from '@angular/core';
import {FlightService} from "./flight.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flights: any;
  flightId: number;
  tucat: any;

  constructor(private flightService: FlightService, private activatedRoute: ActivatedRoute) {
    this.flightService = flightService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(params => params.id)).subscribe(id => this.flightId = id);

  }

}
