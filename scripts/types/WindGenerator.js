//caught you dirty script thief how dare you steal pankiwi brrrrrrr

module.exports = (name, power, Bost, rotatorB, rotatorE) => {

  const wind = extendContent(Wall,name, {
  load() {
    this.super$load();
    this.Region = Core.atlas.find(this.name);
    this.RotatorRegion = Core.atlas.find(this.name + "-rotator")
    this.TopRegion = Core.atlas.find(this.name + "-top")
  },
  setStats() {
    this.super$setStats();
    this.stats.add(Stat.basePowerGeneration, power, StatUnit.powerSecond);
  },

  setBars() {
    this.super$setBars();
    this.bars.add("power", func(e =>
      new Bar(
        prov(() => Core.bundle.format("bar.poweroutput", Mathf.round(
          Math.abs(Mathf.floor(Attribute.light.env() * Bost))) * 60  + power,1)),
        prov(() => Pal.powerBar),

        floatp(() => e.getPowerProduction() * power)
      )))
    this.bars.add("rotator",func(e => new Bar(
      prov(() => Core.bundle.format("bar.rotatorS") + ": " +  Mathf.round(
         Math.abs(Mathf.floor(Attribute.light.env()*rotatorB) * 4) + rotatorE),1),
      prov(() => Color.cyan),
      floatp(() => Time.time * Mathf.round(
        Math.abs(Mathf.floor(Attribute.light.env() * rotatorB) * 4)) + Time.time * rotatorE)
    )))
  },



  icons() {
    return [
     this.Region,
     this.RotatorRegion,
     this.TopRegion
     ]
  }
});
wind.buildVisibility = BuildVisibility.shown;
wind.layer = Layer.turret;
wind.buildType = ent => {
  ent = extend(Wall.WallBuild, wind, {
    draw() {
      this.super$draw();
      let b = wind
      var z = Draw.z();
      Draw.z(Layer.blockOver);
      Draw.rect(b.Region, this.x, this.y);
      Draw.rect(b.RotatorRegion, this.x, this.y, Time.time * Mathf.round(Mathf.floor(Attribute.light.env() * rotatorB) * 4) - Time.time * rotatorE);
      Draw.rect(b.TopRegion, this.x, this.y);
      Draw.z(z)
    },
    getPowerProduction(tile) {
      return Mathf.round(
        Math.abs(Mathf.floor(Attribute.light.env() * Bost))) + power  / 60.0
    }
  });
  return ent
};
return wind
}
