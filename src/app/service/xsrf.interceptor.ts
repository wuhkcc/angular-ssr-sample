import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import Cookie from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class XsrfInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = Cookie.get('XSRF-TOKEN');
    if (!token) {
      return next.handle(req);
    }
    return next.handle(req.clone({ setHeaders: { 'X-XSRF-TOKEN': token } }));
  }
}
