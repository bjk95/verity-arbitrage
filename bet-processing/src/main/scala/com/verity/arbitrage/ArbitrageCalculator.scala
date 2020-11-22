package com.verity.arbitrage

import com.verity.arbitrage.model.{CompetitorOdds, MarketOdds}
import com.verity.arbitrage.HelperFunctions.createMarketOddsId

object ArbitrageCalculator {

  def convertH2hToMarketOdds(oddsResponse: OddsResponseData[H2hOdds]): MarketOdds = {
    val allOdds = getCompetitorH2hOdds(oddsResponse)
    val bestOdds = getBestOddsEachTeam(allOdds)
    MarketOdds(
      id = createMarketOddsId(oddsResponse),
      sportKey = oddsResponse.sport_key,
      sportNice = oddsResponse.sport_nice,
      teams = oddsResponse.teams,
      commenceTime = oddsResponse.commence_time,
      homeTeam = oddsResponse.home_team,
      odds = allOdds,
      bestMargin = getMarketMargin(bestOdds),
      bestOdds = bestOdds
    )
  }

  def getCompetitorH2hOdds(oddsResponse: OddsResponseData[H2hOdds]): Seq[CompetitorOdds] =
    oddsResponse.sites
      .flatMap(site => site.odds.h2h.map(a => (a, site.site_nice)) zip oddsResponse.teams)
      .map {
        case ((odds, site), team) => CompetitorOdds(team, odds, site, 1 / odds)
      }

  def getBestOddsEachTeam(odds: Seq[CompetitorOdds]): Seq[CompetitorOdds] =
    odds.groupBy(_.name)
      .map(_._2.reduce((a,b) => if (a.odds > b.odds) a else b))
      .toSeq

  def getMarketMargin(oddsWithMargin: Seq[CompetitorOdds]): Double =
    oddsWithMargin.foldLeft(0.0)((a,b) => a + b.margin)

}






