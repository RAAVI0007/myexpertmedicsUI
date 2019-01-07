import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TokenStorageService } from './token.storage';
import 'rxjs/add/operator/do';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService, private router: Router) { }

   intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.token.getToken();
        alert(token);
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
  /*intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
      alert(authReq.body.username);
      return next.handle(authReq);
    }
  }*/
    /*return next.handle(authReq).do(evt => {
      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', req.params.get('filter'));
      }
    });*/
    /*return next.handle(authReq).do(evt => {
      if (evt instanceof HttpRequest) {
        console.log('---> status:', evt.body);
        console.log('---> filter:', req.params.get('filter'));
      }
    });*/
    /*return next.handle(authReq).do(
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            alert('error found');
            console.log('req url :: ' + req.url);
            if (err.status === 401) {
              this.router.navigate(['user']);
            }
          }
        }
    );*/
  }
