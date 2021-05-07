
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import DataSource from 'devextreme/data/data_source';

// import DevExtreme Modules
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    // DataSource,
    DxButtonModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
