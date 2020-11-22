import com.verity.arbitrage.ArbitrageCalculator._
import com.verity.arbitrage.GetOdds._
import com.verity.arbitrage.{ApiResponse, H2hOdds}
import io.circe.Json
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

import scala.io.Source



class ApiTest extends AnyFlatSpec with Matchers {
  val mockOddsApiResponse: String = Source.fromResource("mock-response.json").getLines.mkString("")

  val json: Option[Json] = parseStringToJson(mockOddsApiResponse)
  val parsedResponse: Option[ApiResponse[H2hOdds]] = parseH2hOddsApiResponse(json.get)


  "response" should "be parsed without error in" in {
    parsedResponse shouldNot be(None)
  }

  it should "be parsed into match odds" in {
    val marketOdds = parsedResponse.get.data.map(convertH2hToMarketOdds)
  }

  it should "find the best odds" in {
    val marketOdds = parsedResponse.get.data.map(convertH2hToMarketOdds)

    val marketMargin: Seq[Double] = marketOdds.map(_.getBestMargin)
    val s = 1

  }
}
