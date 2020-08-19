import {Component, OnInit, ViewChild} from '@angular/core';
import {Complaint} from "../complaint";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {ComplaintService} from "../complaint.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NewComplaint} from "../new-complaint";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, switchMap} from "rxjs/internal/operators";
import {of} from "rxjs/index";
import {HasComponentUnsavedChanges} from "../../core/can-deactivate-guard.service";

@Component({
  selector: 'app-complaint-edit',
  templateUrl: './complaint-edit.component.html',
  styleUrls: ['./complaint-edit.component.scss']
})
export class ComplaintEditComponent implements OnInit, HasComponentUnsavedChanges {
  @ViewChild('form') private form: NgForm;
  complaint = new NewComplaint();
  urlValidationPattern = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
  isLoading = false;
  private isNew: boolean;
  private complaintId: string;

  constructor(private complaintService: ComplaintService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(mergeMap(params => {
      if (params.id) {
        this.isNew = false;
        this.complaintId = params.id;
        return this.complaintService.getComplaint(this.complaintId);
      } else {
        this.isNew = true;
        return of(new NewComplaint());
      }
    })).subscribe(complaint => this.complaint = complaint);
  }

  submitted() {
    this.isLoading = true;
    const action = this.isNew ? this.complaintService.saveComplaint(this.complaint)
      : this.complaintService.updateComplaint(this.complaintId, this.complaint);
    action.subscribe(() => {
      this.snackBar.open('Complaint saved', 'Ok');
      this.complaint = new NewComplaint();
      this.form.resetForm();
      this.isLoading = false;
      if (!this.isNew) {
        this.router.navigate(['..'], {relativeTo: this.route});
      }
    }, () => this.isLoading = false);
  }
  hasUnsavedChanges(): boolean {
    return !this.form.pristine;
  }
}
