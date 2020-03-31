import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import Cookie from 'js-cookie';
import { CookieService } from '@gorniv/ngx-universal';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class XsrfInterceptor implements HttpInterceptor {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private cookieService: CookieService
    ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token, cookie;
    if (isPlatformBrowser(this.platformId)) {
      token = Cookie.get('XSRF-TOKEN');
    } else {
      token = this.cookieService.get('XSRF-TOKEN');
    }
    console.log('token======>', token)
    if (!token) {
      return next.handle(req);
    }
    return next.handle(req.clone({ setHeaders: { 'X-XSRF-TOKEN': token } }));
  }
}
