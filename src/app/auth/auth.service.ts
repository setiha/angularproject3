import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

 export class User {
id: number;
username: string;
email: string;
}

export class LoginResponse {
   id: string;
   userId: number;
   created: number;
   ttl: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = `${environment.api}/SziaUsers`;
currentUser = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient) { }
  isLoggedIn(): boolean {
    return false;
  }
  logIn(username: string, password: string): Observable<login > {
    return undefined;
  }
  logOut(): Observable<any>{
    return undefined;
  }
  loadUserProfile(): Observable<User> {
    return undefined;
  }
 }
