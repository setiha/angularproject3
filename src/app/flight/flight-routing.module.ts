import { NgModule } from '@angular/core';
import {FlightComponent} from "./flight.component";
import {FlightDetailsResolverService} from "./flight-details-resolver.service";
import {RouterModule, Routes} from "@angular/router";
import {FligthsListComponent} from "./fligths-list/fligths-list.component";

const routes: Routes = [
  {
    path: '',
    component: FligthsListComponent
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
