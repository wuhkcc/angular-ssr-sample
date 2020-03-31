import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { timeout, delay, first } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user$ = new BehaviorSubject<UserData>(null);
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private _platformId: Object,
    ) {}
  Login(data: AuthData) {
    return this.http.post('http://10.0.10.27:10080/api/login', data).toPromise();
  }
  LoginSSR(data: AuthData) {
    return this.http.post('api/login', data).toPromise();
  }
  Logout() {
    return this.http.get('http://10.0.10.27:10080/api/logout').toPromise();
  }
  get User$() {
    return this.user$.pipe(first());
  }
  async User() {
    interface Result {
      admin_id: number;
      admin_username: string;
      full_name: string;
      islogin: boolean;
      photo: string;
      auth_ids: number[];
    }
    const result = await this.http
      .get<Result>('/api/islogin')
      .pipe(timeout(10000))
      .toPromise();
    const user: UserData = {
      uid: result.admin_id,
      username: result.admin_username,
      full_name: result.full_name,
      logged: result.islogin,
      auth_nodes: result.auth_ids || [],
      avatar: result.photo,
    };
    this.user$.next(user);
    return user;
  }
  reset(param: { reset_token: string; new_password: string }) {
    return this.http.post('/api/reset_admin_pwd', param).toPromise();
  }
}
interface UserData {
  uid: number;
  username: string;
  full_name: string;
  logged: boolean;
  avatar: string;
  auth_nodes: number[];
}
interface AuthData {
  username: string;
  password: string;
}
