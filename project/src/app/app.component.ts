
import { NgModule , Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule , DxButtonModule } from 'devextreme-angular';
import {Data , Service} from './app.service';
import DataSource from 'devextreme/data/data_source';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [Service]
})

export class AppComponent {
  title = 'project';
//  data !: Data[];
//   constructor(service : Service){
//     this.data = service.getData();
//   }
}

@NgModule({
  imports: [
      BrowserModule,
      DxDataGridModule,
      DataSource,
      DxButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
 // declarations: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule{}
platformBrowserDynamic().bootstrapModule(AppModule);