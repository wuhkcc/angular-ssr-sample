import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class MessagesService {

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get("/api/admin/message").toPromise();
  }

  listTask() {
    return this.http.get("/api/admin/task?page=0&count=10&category=all&type=1004").toPromise();
  }
}
