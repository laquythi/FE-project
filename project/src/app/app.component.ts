
import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Data} from '@angular/router';

// import { BrowserModule } from '@angular/platform-browser';
// import { DxDataGridModule , DxButtonModule } from 'devextreme-angular';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'project';
  constructor(private http:HttpClient){}
   data !: Data[];
  // create method getData()
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

}