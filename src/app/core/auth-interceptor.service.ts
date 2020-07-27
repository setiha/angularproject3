import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'abcde123456';
    if (token) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }
}
