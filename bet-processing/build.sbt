name := "bet-processing"

version := "0.1"


val circeVersion = "0.12.3"


libraryDependencies ++= Seq(
  "com.softwaremill.sttp.client3" %% "core" % "3.0.0-RC9",
  "io.circe" %% "circe-core" % circeVersion,
  "io.circe" %% "circe-generic" % circeVersion,
  "io.circe" %% "circe-parser" % circeVersion,
  "org.scalatest" %% "scalatest" % "3.2.2" % "test"
)
