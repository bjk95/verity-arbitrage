import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketOdds} from "../../models/market-odds";

@Component({
  selector: 'app-event-investigation',
  templateUrl: './event-investigation.component.html',
  styleUrls: ['./event-investigation.component.css']
})
export class EventInvestigationComponent implements OnInit {
  @Input() market: MarketOdds | undefined;
  @Output() closeInvestigationEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {

  }

  closeInvestigation(){
    this.closeInvestigationEmitter.emit(false)
    console.log("closing investigation")
  }

}
