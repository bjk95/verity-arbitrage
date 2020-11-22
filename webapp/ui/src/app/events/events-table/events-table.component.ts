import {Component, Input, ViewChild, OnInit, EventEmitter, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MarketOdds} from "../../models/market-odds";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
  @Input() marketOdds: MarketOdds[] | undefined;
  @Output() createInvestigationEvent: EventEmitter<string> = new EventEmitter<string>();

  tableHeaders = Array(  "date", "teams", "sport", "bestMargin", "explore")
  dataSource = new MatTableDataSource<MarketOdds>();
  investigation: string | undefined;


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;



  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.marketOdds);
    this.dataSource.sort = this.sort;
  }

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getBestOddsForEachCompetitor(){
    // @ts-ignore
    this.marketOdds.odds.grou
  }

  openInvestigation(id: string){
    this.investigation = id
    this.createInvestigationEvent.emit(id)
    console.log(this.investigation)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
