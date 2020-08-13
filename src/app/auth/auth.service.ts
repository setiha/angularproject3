import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from './user';
import {LoginResponse} from './login-response';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.baseUrl}/login`;
  currentUser = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient) {
    if (this.isValidTokenPresent()) {
      this.currentUser.next(JSON.parse(localStorage.getItem(environment.userKey)));
    } else {
      this.clearLocalStorage();
    }

  }
  isLoggedIn(): boolean {
    return this.currentUser.getValue() !== undefined;
  }

  logIn(email: string, password: string) {
    return this.http.post<LoginResponse>(`${environment.loginUrl}=${environment.tokenKey}`,
      {
        'email': email,
        'password': password,
        'returnSecureToken': true
      })
      .pipe(mergeMap(response => {
        console.log('Response:', response);
        this.storeTokenAndValidity(response);
        console.log(localStorage.getItem(environment.tokenValidityEndKey));
        return this.loadUserProfile(response.localId);

      }));
  }

  logOut() {
    return this.http.post(`${this.baseUrl}/logout`, null)
      .pipe(map(() => {
        this.clearLocalStorage();
        this.currentUser.next(undefined);
      }));
  }

  private clearLocalStorage(): any {
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.tokenValidityEndKey);
    localStorage.removeItem(environment.userKey);
  }

  private loadUserProfile(userId: number): any {
    return this.http.get<User>(`${this.baseUrl}/${userId}.json`)
      .pipe(map(currentUser => {
        this.currentUser.next(currentUser);

      }));
  }

  private isValidTokenPresent(): any {
    const tokenValidityEnd = Number(localStorage.getItem(environment.tokenValidityEndKey));
    return tokenValidityEnd >= new Date().getMilliseconds();
  }

  private storeTokenAndValidity(response: LoginResponse): any {

    localStorage.setItem(environment.tokenKey, response.localId);
    const tokenValidityEnd = new Date(response.created).getMilliseconds() + response.ttl * 1000;
    localStorage.setItem(environment.tokenValidityEndKey, tokenValidityEnd.toString());
  }
}
