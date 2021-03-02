print("mindhorition is mod loading")
try {
let Veri = 0
  // libs
  let Libs = Seq.with("multi-lib", "Missil-lib", "ammon-lib","SoundH",)

  Libs.each(e => {
    try {
      require(e);
      print("Loding lib " + e)
    } catch (err) {
      print("[hori-Pankiwi] error loding lib " + e + "  " + err)
    }
    Veri++
  })

  // types
  let Types = Seq.with("ChargerTurret","RainTurret","WaterWindGenerator","WindGenerator")

  Types.each(e => {
    try {
      require("types/" + e);
      print("Loding turret Type " + e)
    } catch (err) {
      print("[hori-Pankiwi] error loding turret Type " + e + "  " + err)
    }
    Veri++
  })


  //turrets

  let Turrets = Seq.with("infuser", "launchMisel", "flamer", "claimer", "Launcher", "kratos", "trusher", "sprayer", "troncer", "minigun", "chainer", "onu", "sword", "StarShip", "star", "Tripo", "moon","StarFury", "DremurChaos", "divisor", "bictfuse", "Frigge");

  Turrets.each(e => {
    try {
      require("blocks/turrets/" + e);
      print("Creator turret " + e)
    } catch (err) {
      print("[hori-Pankiwi] error creator turret " + e + "  " + err)
    }
    Veri++
  })

  //defense

  let defense = Seq.with("Pulsar-generator","Pulsar_matter");

  defense.each(e => {
    try {
      require("blocks/defense/" + e);
      print("Creator defense " + e)
    } catch (err) {
      print("[hori-Pankiwi] error creator defense " + e + "  " + err)
    }
    Veri++
  })



  ///productions

  let productions = Seq.with("presCompres", "steelSmelter", "meltion", "Constructor-missile", "Factory-Bullet", "oilRefiner", "oil-mixer", "grafeno-Refiner", "Industrial-tungsten-compressor", "Selenita-Reformer","aaaaa");

  productions.each(e => {
    try {
      require("blocks/crafter/" + e);
      print("Creator Crafter " + e)
    } catch (err) {
      print("[hori-Pankiwi] error creator Crafter " + e + "  " + err)
    }
    Veri++
  })

  //Drills
  let Drill = Seq.with("ionic-drill")

  Drill.each(e => {
    try {
      require("blocks/Drill/" + e)
      print("Creator Drill " + e)
    } catch (err) {
      print("[hori-Pankiwi] error creator Drill " + e + "  " + err)
    }
    Veri++
  })

  //powers

  let powers = Seq.with("powerProductor", "winds", "water-winds")

  powers.each(e => {
    try {
      require("blocks/power/" + e);
      print("Creator Power " + e)
    } catch (err) {
      print("[hori-Pankiwi] error creator Power " + e + "  " + err)
    }
    Veri++
  })


  ///planet

  //require("planets/Starion");
  
  print("is loading " + Veri + " scripts")

  print("mindhorition finish load")

} catch (e) {
  print(e);
  print("ho no  error D:");
}

const autoUpdate = require("autoupdate");
autoUpdate.autoUpdate("hori", "pankiwi/MindHorition", "main");