Global / name := "verity-arbitrage"

Global / organization := "com.verity"


Global / version := "0.1"

Global / scalaVersion := "2.12.11"

lazy val webapp = (project in file("webapp"))
  .dependsOn(betProcessing)
  .enablePlugins(PlayScala)
  .settings(
    watchSources ++= (baseDirectory.value / "webapp/ui/src" ** "*").get
  )

lazy val betProcessing = (project in file("bet-processing"))

