import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';
import {ComplaintListComponent} from "./complaint-list/complaint-list.component";
import {ComplaintEditComponent} from "./complaint-edit/complaint-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ComplaintComponent,
    children: [
      {
        path: '',
        component: ComplaintListComponent
      },
      {
        path: 'edit',
        component: ComplaintEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintRoutingModule {}
