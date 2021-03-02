const meltion = extendContent(GenericCrafter, "meltion",{
  load(){
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + '-liquid');
    this.topRegion = Core.atlas.find(this.name + '-top');
  },
  icons(){
    return [
      this.region,
      this.topRegion
      ]
  }
});

meltion.buildType = ent => {
  ent =  extend(GenericCrafter.GenericCrafterBuild,meltion,{
    draw(){
      let b = meltion;
      Draw.rect(b.region,this.x,this.y);
      Drawf.liquid(b.liquidRegion,this.x,this.y,this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
      Draw.rect(b.topRegion,this.x,this.y)
    }
  });
  return ent
};