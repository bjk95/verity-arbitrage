import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketOdds} from "../../models/market-odds";
import {CompetitorOdds} from "../../models/competitor-odds";

@Component({
  selector: 'app-event-investigation',
  templateUrl: './event-investigation.component.html',
  styleUrls: ['./event-investigation.component.css']
})
export class EventInvestigationComponent implements OnInit {
  @Input() market: MarketOdds | undefined;
  @Output() closeInvestigationEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  competitorTableColumns = Array( "odds", "site", "margin")

  constructor() {

  }

  ngOnInit() {}

  closeInvestigation(){
    this.closeInvestigationEmitter.emit(false)
    console.log("closing investigation")
  }

  allOddsThisCompetitor(c: CompetitorOdds): Array<CompetitorOdds>{
    // @ts-ignore
    const filtered = this.market.odds.filter((comp: CompetitorOdds) => c.name === comp.name);
    return filtered.sort((a,b) => a.odds + b.odds )
  }

}
