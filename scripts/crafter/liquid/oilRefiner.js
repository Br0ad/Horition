const oilRefiner = extendContent(GenericCrafter, "oil-refiner",{
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
   this.liquidRegion1 = Core.atlas.find(this.name + "-liquid-1");
   this.liquidRegion2 = Core.atlas.find(this.name + "-liquid-2");
   this.topRegion = Core.atlas.find(this.name + "-top");
   this.rotatorRegion = Core.atlas.find(this.name + "-rotator")
  },
  icons(){
    return [
      this.region,
      this.rotatorRegion,
      this.topRegion
      ]
  }
}); 

oilRefiner.buildType = ent => {
    ent = extend(GenericCrafter.GenericCrafterBuild,oilRefiner, {
      draw(){
        let b = oilRefiner
        
        Draw.rect(b.region,this.x,this.y)
        Drawf.liquid(b.liquidRegion1, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
        Draw.rect(b.rotatorRegion, this.x,this.y, this.totalProgress * 2.5);
        Draw.rect(b.topRegion, this.x,this.y);
        Drawf.liquid(b.liquidRegion2, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
      }
    });
  return ent
};