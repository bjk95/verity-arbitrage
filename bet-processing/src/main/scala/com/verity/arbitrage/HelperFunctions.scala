package com.verity.arbitrage

object HelperFunctions {
  def md5HashString(s: String): String = {
    import java.security.MessageDigest
    import java.math.BigInteger
    val md = MessageDigest.getInstance("MD5")
    val digest = md.digest(s.getBytes)
    val bigInt = new BigInteger(1,digest)
    val hashedString = bigInt.toString(16)
    hashedString
  }

  def createMarketOddsId(oddsResponse: OddsResponseData[H2hOdds]): String =
    md5HashString(oddsResponse.sport_key + oddsResponse.teams.mkString + oddsResponse.commence_time)
}
