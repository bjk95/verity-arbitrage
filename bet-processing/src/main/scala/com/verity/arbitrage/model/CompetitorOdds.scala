package com.verity.arbitrage.model


case class CompetitorOdds(
                           name: String,
                           odds: Double,
                           site: String,
                           margin: Double
                         )