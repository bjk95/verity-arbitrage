import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { EventsModule } from './events/events.module';

import { AppComponent } from './app.component';
import { RouteExampleComponent } from './route-example/route-example.component';
import { EventsTableComponent } from "./events/events-table/events-table.component";

import { AppService } from './app.service';
import { AppHttpInterceptorService } from './http-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EventsHomeComponent} from "./events/events-home/events-home.component";

const routes: Routes = [
  {
    path: 'play',
    component: RouteExampleComponent,
    data: { technology: 'Play' }
  },
  {
    path: 'events',
    component: EventsHomeComponent,
    data: { technology: 'Play' }
  },
  {
    path: '**',
    redirectTo: '/play',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RouteExampleComponent,

  ],
  imports: [
    MaterialComponentsModule,
    EventsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Csrf-Token',
      headerName: 'Csrf-Token',
    }),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    AppService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
