package controllers

import javax.inject._
import com.verity.arbitrage.GetOdds.getTestOdds
import com.verity.arbitrage.ArbitrageCalculator.convertH2hToMarketOdds
import com.verity.arbitrage.model.{CompetitorOdds, MarketOdds}
import play.api.libs.json._
import play.api.libs.json.Json
import play.api.mvc._

@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  implicit val competitorOddsReads: Writes[CompetitorOdds] = Json.writes[CompetitorOdds]
  implicit val marketOddsReads: Writes[MarketOdds] = Json.writes[MarketOdds]


  def appSummary = Action {
    Ok(Json.obj("content" -> "Verity Arbitrage"))
  }

  def postTest = Action {
    val testResponse = getTestOdds

    Ok(Json.obj("content" -> testResponse.data.map(convertH2hToMarketOdds)))
  }
}
