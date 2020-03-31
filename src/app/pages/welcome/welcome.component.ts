import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../../service/messages.service";
import * as _ from 'lodash';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: "app-messages",
  template: `
    <nz-table #basicTable [nzData]="result">
      <thead>
        <tr>
          <th>id</th>
          <th>userName</th>
          <th>fullName</th>
          <th>status</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.id }}</td>
          <td>{{ data.userName }}</td>
          <td>{{ data.fullName }}</td>
          <td>{{ data.status }}</td>
          <td>{{ data.createdAt }}</td>
          <td>
            <a>Action 一 {{ data.userName }}</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class WelcomeComponent implements OnInit {
  
  // 635	admin	超级管理员	33539	2020-03-24T07:42:39Z	Action 一 adminDelete
  // 634	admin	超级管理员	33539	2020-03-24T07:38:00Z	Action 一 adminDelete
  // 629	admin	超级管理员	33539	2020-03-23T03:14:06Z	Action 一 adminDelete
  // 628	admin	超级管理员	33539	2020-03-23T03:13:10Z	Action 一 adminDelete
  // 609	admin	超级管理员	33539	2020-03-20T12:06:48Z	Action 一 adminDelete
  // 608	admin	超级管理员	33539	2020-03-20T12:00:12Z	Action 一 adminDelete
  // 595	admin	超级管理员	33539	2020-03-20T09:38:46Z	Action 一 adminDelete
  // 570	admin2	yujian	33539	2020-03-20T08:18:47Z	Action 一 admin2Delete
  // 569	admin2	yujian	33540	2020-03-20T08:16:56Z	Action 一 admin2Delete
  // 569	admin2	yujian	33540	2020-03-20T08:16:56Z	Action 一 admin2Delete
 
  listOfData = [
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
    }
  ];
  result: [];
  constructor(private messageService: MessagesService) {}
  ngOnInit() {
    this.fetchList();
    // localstorage
    console.log(this.dataFromLocalstorage())
  }

  fetchList() {
    const list = this.messageService.listTask();
    console.log('list========>', list);
    this.result = _.map(list, item => {
      return {
        id: item.id,
        status: item.status,
        fullName: item.fullName,
        userName: item.userName,
        createdAt: item.createdAt
      };
    });
  }

  dataFromLocalstorage() {
    const token: string = <string>localStorage.getItem('accessToken');
    if (token) {
      return token;
    } else {
      localStorage.setItem('accessToken', 'accessToken----11112222');
      return this.dataFromLocalstorage()
    }
  }
}
