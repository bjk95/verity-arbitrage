package com.verity.arbitrage

import io.circe.Decoder
import io.circe.Decoder.Result
import io.circe._, io.circe.generic.semiauto._

package object implicits {

  implicit class ResultMethods[T](res: Result[T]) {
    def getValueOrPrintError: Option[T] =
      res match {
        case Left(value) => println(value)
          None
        case Right(value) => Some(value)
      }
  }

  implicit val h2hResponseDecoder: Decoder[OddsResponseData[H2hOdds]] = deriveDecoder[OddsResponseData[H2hOdds]]
  implicit val h2hSiteDecoder: Decoder[SiteOdds[H2hOdds]] = deriveDecoder[SiteOdds[H2hOdds]]
  implicit val h2hDecoder: Decoder[H2hOdds] = deriveDecoder[H2hOdds]
  implicit val h2hFullResponseDecoder: Decoder[ApiResponse[H2hOdds]] = deriveDecoder


}
