package com.verity.arbitrage.model

import com.verity.arbitrage.ArbitrageCalculator.{getBestOddsEachTeam, getMarketMargin}

case class MarketOdds(
                     id: String,
                       sportKey: String,
                       sportNice: String,
                       teams: Seq[String],
                       commenceTime: Long,
                       homeTeam: String,
                       odds: Seq[CompetitorOdds],
                       bestMargin: Double,
                      bestOdds: Seq[CompetitorOdds]
                     ) {
  def getBestMargin: Double = getMarketMargin(getBestOddsEachTeam(odds))
}