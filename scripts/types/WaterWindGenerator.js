//caught you dirty script thief how dare you steal pankiwi brrrrrrr
module.exports = (name,powerP,Bost,rotatorB,rotatorE) => {

const waterWind = extendContent(Wall,name, {
  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    this.buttomRegion = Core.atlas.find(this.name + "-buttom");
  },
  setStats() {
    this.super$setStats();
    this.stats.add(Stat.basePowerGeneration, powerP, StatUnit.powerSecond);
  },
  setBars() {
    this.super$setBars();
    this.bars.add("power", func(e =>
      new Bar(
        prov(() => Core.bundle.format("bar.poweroutput", Mathf.round(
          Mathf.floor(Attribute.water.env() * Bost)) * 60 + powerP, 1)),
        prov(() => Pal.powerBar),

        floatp(() => Attribute.water.env() * 2 + (Bost / 3))
      )))
    this.bars.add("rotator", func(e => new Bar(
      prov(() => Core.bundle.format("bar.WaterS") + ": " + Mathf.round(Mathf.floor(Attribute.water.env() * rotatorB) + rotatorE), 1),
      prov(() => Color.blue),
      floatp(() => Attribute.water.env() * 9 + 1)
    )))
  },
  icons() {
    return [
      this.region,
      this.rotatorRegion,
      this.buttomRegion
      ]
  }
});

waterWind.buildType = ent => {
  ent = extend(Wall.WallBuild, waterWind, {
    draw() {
      
      var z = Draw.z();
      Draw.z(Layer.blockOver);
      Draw.rect(waterWind.region, this.x, this.y);
      Draw.rect(waterWind.rotatorRegion, this.x, this.y, Time.time * Mathf.round(Mathf.floor(Attribute.water.env() * rotatorB) + 1) + Time.time * rotatorE);
      Draw.rect(waterWind.buttomRegion, this.x, this.y);
      Draw.z(z)
    },
    getPowerProduction(tile) {
      return Mathf.round(Mathf.floor(Attribute.water.env() * Bost)) + powerP / 60.0
    }

  });

  return ent
}
return waterWind
}