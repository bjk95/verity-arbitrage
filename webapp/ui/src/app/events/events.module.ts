import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from './events-table/events-table.component';
import {EventService} from "./events-table/events.service";
import {MaterialComponentsModule} from "../material-components/material-components.module";
import { EventsHomeComponent } from './events-home/events-home.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {RouterModule} from "@angular/router";
import { EventInvestigationComponent } from './event-investigation/event-investigation.component';



@NgModule({
  declarations: [EventsTableComponent, EventsHomeComponent, EventInvestigationComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
