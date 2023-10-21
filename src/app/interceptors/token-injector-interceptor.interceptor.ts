import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clientToken = sessionStorage.getItem("ng-client-token")
    console.log("TokenInjectorInterceptor")
    request = request.clone(
      {
          setHeaders: { Authorization: `Bearer ${clientToken}` }
      });

    return next.handle(request);
  }
}
