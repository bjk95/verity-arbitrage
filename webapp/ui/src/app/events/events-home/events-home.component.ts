import { Component, OnInit } from '@angular/core';
import {OddsResponse} from "../../models/odds-response";
import {EventService} from "../events-table/events.service";
import {MarketOdds} from "../../models/market-odds";

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit {
  oddsRequestResponse: OddsResponse | undefined;
  myString = "waiting"
  investigationId: string | undefined;
  market: MarketOdds | undefined;


  constructor(private appService: EventService) {
    this.requestEvents()
  }
  ngOnInit() {
  }

  public requestEvents(): void {
    this.appService.sendData().subscribe((data: OddsResponse) => {
      console.log(data)
      this.oddsRequestResponse = data;
      this.myString = "got here"
    });
  }

  logInvestigationId(id: string){
    this.investigationId = id
    // @ts-ignore
    this.market = this.oddsRequestResponse.content.find((m: any) => m.id === this.investigationId)
  }

  closeInvestigation(close: boolean){
    if (!close){
      this.market = undefined;
    }
  }



}
