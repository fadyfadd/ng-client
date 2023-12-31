import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {

  constructor(private accountService:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //let clientToken = sessionStorage.getItem("ng-client-token")
    let clientToken = this.accountService.sessionToken;
    console.log("TokenInjectorInterceptor")
    request = request.clone(
      {
          setHeaders: { Authorization: `Bearer ${clientToken}` }
      });

    return next.handle(request);
  }
}
