// import {Injectable, Inject, Optional} from '@angular/core';
// import {HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
// import {Request} from 'express';
// import {REQUEST} from '@nguniversal/express-engine/tokens';

// @Injectable()
// export class UniversalInterceptor implements HttpInterceptor {

//   constructor(@Optional() @Inject(REQUEST) protected request?: Request) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     let serverReq: HttpRequest<any> = req;
//     console.log('protocol', this.request.protocol);
//     console.log('host', this.request.get('host'));
//     if (this.request) {
//       let newUrl = `${this.request.protocol}://10.0.10.27:10080`;
//       if (!req.url.startsWith('/')) {
//         newUrl += '/';
//       }
      
//       newUrl += req.url;
//       console.log('new Url', newUrl);
//       serverReq = req.clone({url: newUrl});
//     }
//     return next.handle(serverReq);
//   }
// }