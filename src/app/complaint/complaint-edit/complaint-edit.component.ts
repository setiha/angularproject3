import {Component, OnInit, ViewChild} from '@angular/core';
import {Complaint} from "../complaint";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {ComplaintService} from "../complaint.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NewComplaint} from "../new-complaint";

@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.scss']
})
export class ComplaintEditComponent implements OnInit {
  @ViewChild('form')  private form: NgForm;
  complaint = new NewComplaint();
  urlValidationPattern =  '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
  constructor(private complaintService: ComplaintService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.complaint.name = 'teszt';
  }
submitted(){
    this.complaintService.saveComplaint(this.complaint).subscribe(() => {
      this.snackBar.open('Complaint saved', 'Ok');
      this.complaint = new NewComplaint();
      this.form.resetForm();
    });
}
}
