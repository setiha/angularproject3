import { NgModule } from '@angular/core';
import {FlightComponent} from "./flight/flight.component";
import {FlightDetailsResolverService} from "./flight-details-resolver.service";
import {RouterModule, Routes} from "@angular/router";
import {FligthListComponent} from "./fligth-list/fligth-list.component";

const routes: Routes = [
  {
    path: '',
    component: FligthListComponent
  },
  {
    path: ':id',
    component: FlightComponent,
    resolve: {
      flight: FlightDetailsResolverService
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
