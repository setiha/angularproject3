import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs/index";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent, ConfirmDialogData} from "../shared/confirm-dialog/confirm-dialog.component";

export interface HasComponentUnsavedChanges {
  hasUnsavedChanges(): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<HasComponentUnsavedChanges> {

  constructor(private dialogService: MatDialog) {
  }
  canDeactivate(component: HasComponentUnsavedChanges): Observable<boolean> | boolean{
    if (!component.hasUnsavedChanges()){
      return true;
    }else{
      const data: ConfirmDialogData = {question: 'Your unsaved changes wll be lost. Are you sure you want to navigate'};
      return this.dialogService.open(ConfirmDialogComponent, {data}).afterClosed();
    }
  }
}


