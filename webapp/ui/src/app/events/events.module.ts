import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from './events-table/events-table.component';
import {EventService} from "./events-table/events.service";
import {MaterialComponentsModule} from "../material-components/material-components.module";
import { EventsHomeComponent } from './events-home/events-home.component';



@NgModule({
  declarations: [EventsTableComponent, EventsHomeComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
