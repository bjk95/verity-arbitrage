package com.verity.arbitrage

import io.circe.Decoder.Result
import io.circe._
import io.circe.parser._
import sttp.client3._
import sttp.model.Uri
import com.verity.arbitrage.implicits._

import scala.io.{BufferedSource, Source}

object GetOdds {

  val baseUri = "https://api.the-odds-api.com/v3/"

  val baseParams = Map(
    "apiKey" -> "81efc1f824f86fc16b266e0b7142c0eb"
  )

  def sendRequestAndParseJson(completeUri: Uri): Option[Json] = {
    val request = basicRequest.get(completeUri)

    val backend = HttpURLConnectionBackend()
    val response = request.send(backend)


    response.body match {
      case Left(value) => println(s"bad response $value")
        None
      case Right(value) => parseStringToJson(value)
    }
  }

  def parseStringToJson(s: String): Option[Json] =
    parse(s) match {
      case Left(value) => println(s"bad parsing $value")
        None
      case Right(value) =>Some(value)
    }

  def getSports: Option[Json] = {
    val completeUri: Uri = uri"$baseUri/sports?$baseParams"
    sendRequestAndParseJson(completeUri)
  }

  def getOdds(sport: String, market: String = "h2h", region: String = "au"): Option[Json] = {
    val completedParams = baseParams ++ Map(
      "sport" -> sport,
      "region" -> region,
      "mkt" -> market
    )

    val completeUri = uri"$baseUri/odds?$completedParams"

    val response = sendRequestAndParseJson(completeUri)

    val s=2
    None
  }

  def parseH2hOddsApiResponse(response: Json): Option[ApiResponse[H2hOdds]] = {
    val cast: Result[ApiResponse[H2hOdds]] = response.as[ApiResponse[H2hOdds]]
      getValueOrPrintError(cast)
  }

  def getValueOrPrintError[T](res: Result[T]): Option[T] =
    res match {
      case Left(value) => println(value)
        None
      case Right(value) => Some(value)
    }

  def getTestOdds: ApiResponse[H2hOdds] = {
    val mockOddsApiResponse: BufferedSource = Source.fromFile("bet-processing/src/test/resources/mock-response.json")

    val jsonString = mockOddsApiResponse.getLines.mkString

    mockOddsApiResponse.close

    val json: Option[Json] = parseStringToJson(jsonString)
    val parsedResponse: Option[ApiResponse[H2hOdds]] = parseH2hOddsApiResponse(json.get)
    parsedResponse.get
  }

}

case class ApiResponse[T <: Odds](
  success: Boolean,
  data: Seq[OddsResponseData[T]]
)

case class OddsResponseData[T <: Odds](
               sport_key: String,
               sport_nice: String,
               teams: Seq[String],
               commence_time: Long,
               home_team: String,
               sites: Seq[SiteOdds[T]],
               sites_count: Int
               )

case class SiteOdds[T <: Odds](
                   site_key: String,
                   site_nice: String,
                   last_update: Long,
                   odds: T
                   )

sealed trait Odds

case class H2hOdds(
                  h2h: Seq[Double]
                  ) extends Odds