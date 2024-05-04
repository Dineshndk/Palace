import { Injectable } from '@angular/core';
//import {AuthGuardService} from './apiservice.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var currentUser = "";//this.authGuard.getToken();

    if(currentUser){
      request = request.clone({
        setHeaders:{
          Authorization : "Bearer " + currentUser,
        }
      })
    }
    return next.handle(request);
  }
}
