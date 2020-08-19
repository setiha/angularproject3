import {Component, OnInit} from '@angular/core';
import {ComplaintService} from '../complaint.service';
import {Complaint} from '../complaint';
import {map, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
})
export class ComplaintListComponent implements OnInit {
  complaints: Complaint[];

  constructor(private complaintService: ComplaintService) {
  }

  ngOnInit() {
    this.complaintService.getComplaints().pipe(
      map(complaints => Object.keys(complaints).map(complaint => complaints [complaint]))
    )
      .subscribe(complaints => {
        this.complaints = complaints;
        console.log(complaints);
      });
  }
}
