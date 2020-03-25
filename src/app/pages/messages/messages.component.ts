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
  constructor(private messageService: MessagesService) {}
  async ngOnInit() {
    await this.fetchList();
  }

  async fetchList() {
    const list = await this.messageService.list();
    this.result = _.map(list, item => {
      return {
        id: item.id,
        status: item.status,
        content: item.message.content,
        title: item.message.title,
        sender: item.message.sender.full_name,
        createdAt: item.created_at
      };
    });
  }
}
