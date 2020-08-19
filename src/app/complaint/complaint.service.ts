import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Complaint } from './complaint';
import { NewComplaint } from './new-complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private baseUrl = `${environment.baseUrl}/Complaints`;

  constructor(private http: HttpClient) {}

  getComplaints() {
    return this.http.get<Complaint[]>(`${environment.baseUrl}/Complaints.json`);
  }

  getComplaint(id: string) {
    return this.http.get<Complaint>(`${this.baseUrl}/${id}.json`);
  }

  saveComplaint(complaint: NewComplaint) {
    return this.http.post<Complaint>(this.baseUrl, complaint);
  }

  updateComplaint(id: string, complaint: NewComplaint) {
    return this.http.put<Complaint>(`${this.baseUrl}/${id}.json`, complaint);
  }
}
