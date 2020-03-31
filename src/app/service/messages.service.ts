import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable({
  providedIn: "root"
})
export class MessagesService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object,

    ) {}

  list() {
    return [{
      id: 2, 
      created_at: "2020-03-20T03:14:59Z",
      updated_at: "2020-03-20T03:15:23Z",
      status: "read",
      message: {
        id: 2,
        created_at: "2020-03-20T03:14:59Z",
        updated_at: "2020-03-20T03:14:59Z",
        sender: {id: 6, username: "admin2", full_name: "yujian"},
        title: "111",
        content: "11111",
        text: "11111",
      },
      receiver: null
    }, {
      id: 2,
      created_at: "2020-03-20T03:14:59Z",
      updated_at: "2020-03-20T03:15:23Z",
      status: "read",
      message: {
        id: 2,
        created_at: "2020-03-20T03:14:59Z",
        updated_at: "2020-03-20T03:14:59Z",
        sender: {id: 6, username: "admin2", full_name: "yujian"},
        title: "111",
        content: "11111",
        text: "11111",
      },
      receiver: null
    }]
    // return this.http.get("http://10.0.10.27:10080/api/admin/message").toPromise();
    // return this.http.get("api/admin/message").toPromise();
  }
 listTask() {
  return [
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
    {
      id: "635",
      userName: "admin",
      fullName: "超级管理员",
      status: "33539",
      createdAt: "2020-03-24T07:42:39Z"
    },
  ];
    // return this.http.get("http://10.0.10.27:10080/api/admin/task?page=0&count=10&category=all&type=1004").toPromise();
    // return this.http.get("api/admin/task?page=0&count=10&category=all&type=1004").toPromise();
  }
}
