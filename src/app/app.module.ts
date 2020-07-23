import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import {DeviceDetectorModule} from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    ShareButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
