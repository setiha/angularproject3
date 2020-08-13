import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintRoutingModule } from './complaint-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ComplaintEditComponent } from './complaint-edit/complaint-edit.component';

@NgModule({
  declarations: [ComplaintComponent, ComplaintListComponent, ComplaintEditComponent],
  imports: [
    CommonModule,
    ComplaintRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class ComplaintModule {}
