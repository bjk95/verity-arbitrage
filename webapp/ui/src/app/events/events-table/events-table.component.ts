import { Component, OnInit } from '@angular/core';
import {OddsResponse} from "../../models/odds-response";
import { EventService } from "./events.service";

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {

  oddsRequestResponse: OddsResponse | undefined;


  constructor(private appService: EventService) {
  }
  ngOnInit() {
  }

  public requestEvents(): void {
    this.appService.sendData().subscribe((data: OddsResponse) => {
      this.oddsRequestResponse = data;
    });
  }

}
