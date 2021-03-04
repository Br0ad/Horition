const steelSmelter = extendContent( GenericCrafter, "steelSmelter", {
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + "-liquid")
  },
  icons(){
    return [
      this.region
      ];
  }
});

steelSmelter.buildType = ent => {
  ent = extend(GenericCrafter.GenericCrafterBuild, steelSmelter, {
    draw(){
      let b = steelSmelter;
      
      Draw.rect(b.region, this.x,this.y);
      
      Drawf.liquid(b.liquidRegion, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
      }
  });
  return ent;
}

