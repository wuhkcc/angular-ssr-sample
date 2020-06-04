import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './pages/login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { IconsProviderModule } from './icons-provider.module';
import { MessagesComponent } from './pages/messages/messages.component';
import { XsrfInterceptor } from './service/xsrf.interceptor';
import { CookieService, CookieModule } from '@gorniv/ngx-universal';
import { LoginService } from './service/login.service';
import { MessagesService } from './service/messages.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    CookieModule.forRoot(),
    BrowserTransferStateModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XsrfInterceptor,
      multi: true,
    },
    CookieService,
    LoginService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
