import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {FlightComponent} from "./flight/flight.component";
import {FlightDetailsResolverService} from "./flight/flight-details-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'flights/:id',
    component: FlightComponent,
    resolve: {
      flight: FlightDetailsResolverService
    }
  },
  {
    path: 'flights',
    component: FlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
