import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import {FormState} from './app.state';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouterModule,
    NgxsModule.forRoot([FormState]),
    NgxsFormPluginModule.forRoot()
  ],
  declarations: [AppComponent, TestComponent, SampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
