import {Component, OnInit} from '@angular/core';
import {Complaint} from "../complaint";

@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.scss']
})
export class ComplaintEditComponent implements OnInit {
  complaint = new Complaint();
urlValidationPattern =  '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';

  constructor() {

  }

  ngOnInit(): void {
    this.complaint.name = 'teszt';
  }

}
