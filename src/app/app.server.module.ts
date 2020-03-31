import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { ServerTransferStateModule } from "@angular/platform-server";
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { CookieService, CookieBackendService } from "@gorniv/ngx-universal";
import {
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
  HttpClientModule
} from "@angular/common/http";
import { XsrfInterceptor } from "./service/xsrf.interceptor";
// import { UniversalInterceptor } from './service/universal.interceptor';

@NgModule({
  imports: [AppModule, ServerModule, HttpClientModule, HttpClientXsrfModule, ServerTransferStateModule],
  providers: [
    { provide: CookieService, useClass: CookieBackendService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XsrfInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
