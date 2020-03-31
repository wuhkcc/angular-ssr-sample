import { isPlatformServer, isPlatformBrowser } from "@angular/common";
import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { MessagesService } from "../../service/messages.service";
import * as _ from "lodash";
import { makeStateKey, TransferState } from "@angular/platform-browser";

const MESSAGE_KEY = makeStateKey("messages");

@Component({
  selector: "app-messages",
  template: `
    <nz-table #basicTable [nzData]="result">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>content</th>
          <th>sender</th>
          <th>status</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.id }}</td>
          <td>{{ data.title }}</td>
          <td>{{ data.content }}</td>
          <td>{{ data.sender }}</td>
          <td>{{ data.status }}</td>
          <td>{{ data.createdAt }}</td>
          <td>
            <a>Action 一 {{ data.sender }}</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class MessagesComponent implements OnInit {
  listOfData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];
  result: [];
  constructor(
    private messageService: MessagesService,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private transferState: TransferState
  ) {}

  // ngOnInit() {
  //   console.log('transferState', this.transferState.hasKey(MESSAGE_KEY));
  //   this.result = this.transferState.get(MESSAGE_KEY, null);
  //   if (!this.result) {
  //     this.result = this.fetchList();
  //   }
  // }
  ngOnInit() {
    console.log('state', this.transferState.hasKey(MESSAGE_KEY));
    if (this.transferState.hasKey(MESSAGE_KEY)) {
      this.result = this.transferState.get(MESSAGE_KEY, null);
      console.log('browser, result', this.result);
      this.transferState.remove(MESSAGE_KEY);
    } else {
      if (isPlatformServer(this._platformId)) {
        this.result = this.fetchList();
        this.transferState.set(MESSAGE_KEY, this.result);
      }
    }
  }

  fetchList() {
    const list = this.messageService.list();
    console.log("list", list);
    const result = _.map(list, item => {
      return {
        id: item.id,
        status: item.status,
        content: item.message.content,
        title: item.message.title,
        sender: item.message.sender.full_name,
        createdAt: item.created_at
      };
    });
    this.transferState.set(MESSAGE_KEY, result);
    return result;
  }
}
