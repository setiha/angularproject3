import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {environment} from "../../environments/environment";
import {Flight} from "./flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {
  }

  listFlight(): Observable<Flight[]> {

    return this.http.get<Flight[]>(`${environment.api}/Flights`);
  }

  getFlight(id: number): Observable<Flight> {

    return this.http.get<Flight>(`${environment.api}/Flights/${id}`);
  }
}
