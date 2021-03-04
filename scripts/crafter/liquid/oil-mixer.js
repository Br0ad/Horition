const oilMixer = extendContent(GenericCrafter,"oil-mixer",{
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.LiquidRegion1 = Core.atlas.find(this.name + "-liquid1");
    this.LiquidRegion2 = Core.atlas.find(this.name + "-liquid2");
    this.TopRegion1 = Core.atlas.find(this.name + "-top1");
    this.TopRegion2 = Core.atlas.find(this.name + "-top2");
    this.RotatorRegion1 = Core.atlas.find(this.name + "-rotator1");
    this.RotatorRegion2 = Core.atlas.find(this.name + "-rotator2");

  },
  icons(){
    return [
      this.region,
      this.RotatorRegion1,
      this.TopRegion1,
      this.RotatorRegion2,
      this.TopRegion2
      ]
  }
});

oilMixer.buildType = ent => {
    ent = extend(GenericCrafter.GenericCrafterBuild, oilMixer, {
      draw(){
        let b = oilMixer;
        
        Draw.rect(b.region,this.x,this.y);
        Drawf.liquid(b.LiquidRegion1, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
        Draw.rect(b.RotatorRegion1, this.x, this.y, this.totalProgress * 5);
        Draw.rect(b.TopRegion1,this.x,this.y);
  Drawf.liquid(b.LiquidRegion2, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
  Draw.rect(b.RotatorRegion2, this.x, this.y, this.totalProgress * 5);
  Draw.rect(b.TopRegion2, this.x, this.y)
      }
    });
    return ent
    };