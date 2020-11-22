import { CompetitorOdds } from "./competitor-odds";

export interface MarketOdds{
  id: string;
  sportKey: string;
  sportNice: string;
  teams: Array<string>;
  commenceTime: number;
  homeTeam: string;
  odds: Array<CompetitorOdds>;
  bestMargin: number;
}
