
import { Component } from '@angular/core';
import ODataStore from "devextreme/data/odata/store";
import DataSource from "devextreme/data/data_source";
import 'devextreme/data/odata/store';
import CustomStore from 'devextreme/data/custom_store';

import { DxDataGridModule } from 'devextreme-angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Data } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'project';
  store: ODataStore;
  dataSource: DataSource;

  abc = [];
  // constructor(private http:HttpClient){

  // }

  constructor(private http : HttpClient) {
    this.store = new ODataStore({
     // url: "https://jsonplaceholder.typicode.com/posts",
     // key: "id",
    // keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        userId: "String"
        //title: "String",
        //body: "String"
      }
    });
    this.dataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'https://jsonplaceholder.typicode.com/posts'
      },
      select: [
        'id',
        'userId',
        'title',
        'body'
      ]
    })
    this.getData();
  }

  // 0505 1400,1430 comment getData
  data !: Data[];
  getData() : Promise<Data[]>{
    const params = new HttpParams();
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: params
      })
      .toPromise()
      .then((res) => {
        this.data = res as Data[];
        console.log(this.data);
        return this.data;
      });
  }
  // pointClickHandler(e: any) {
  //   console.log('row click event handled');
  // }
}