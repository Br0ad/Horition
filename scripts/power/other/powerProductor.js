try{
  print("oil-plant-script load")
  
const oilPlant = extendContent(BurnerGenerator, "oil-plant", {
  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
    this.topRegion = Core.atlas.find(this.name + "-top")
  },
  icons() {
    return [
      this.region,
      this.topRegion
      ]
  }
});

oilPlant.buildType = ent => {
  ent = extend(BurnerGenerator.BurnerGeneratorBuild, oilPlant, {
    draw() {
      let b = oilPlant;
      Draw.rect(b.region, this.x, this.y);
      Drawf.liquid(b.liquidRegion, this.x, this.y, this.liquids.total() / b.liquidCapacity, this.liquids.current().color);
      Draw.rect(b.topRegion, this.x, this.y)
    }
  })
  return ent
  
};

  print("oil-plant-script-finish-load")

}catch(e){
  print("oil-plant-script" + ": " + e)
}



/////////
try{
print("steampunker-script-load")

const steampunker = extendContent(BurnerGenerator, "steampunker", {
  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
    this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top")
  },
  icons() {
    return [
      this.region,
      this.rotatorRegion,
      this.topRegion
      ]
  }
})

steampunker.buildType = ent => {
  ent = extend(BurnerGenerator.BurnerGeneratorBuild, steampunker, {
    draw() {
      Draw.rect(steampunker.region, this.x, this.y);
      Drawf.liquid(steampunker.liquidRegion, this.x, this.y, this.liquids.total() / steampunker.liquidCapacity, this.liquids.current().color);
      Draw.rect(steampunker.rotatorRegion, this.x, this.y, this.totalTime * steampunker.turbineSpeed)
      Draw.rect(steampunker.rotatorRegion, this.x, this.y, -this.totalTime * steampunker.turbineSpeed)
      Draw.rect(steampunker.topRegion, this.x, this.y)
    }
  })
  return ent
}

print("steampunker-script-finish-load")
}catch(e){
  print("steampunker-script" + ": " + e)
}


///////



const termalFx = new Effect(50, e => {
  Draw.color(Color.valueOf("ffa166"));
  Angles.randLenVectors(e.id, 4, e.finpow() * 15, e.rotation, 360, (x, y) => {
    Lines.circle(e.x + x, e.y + y, e.fin() * 2);
  })
});

try{
  print("termal-script-load")
  
const termal = extendContent(SingleTypeGenerator, "termal", {

  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
    this.topRegion1 = Core.atlas.find(this.name + "-top1");
    this.topRegion2 = Core.atlas.find(this.name + "-top2")
  },
  icons() {
    return [
      this.region,
      this.topRegion1,
      this.topRegion2
      ]
  },
});

termal.generateEffect = termalFx;




termal.buildType = ent => {

  ent = extend(ItemLiquidGenerator.ItemLiquidGeneratorBuild, termal, {
    draw() {

      Draw.rect(termal.region, this.x, this.y);
      Drawf.liquid(termal.liquidRegion, this.x, this.y, this.liquids.total() / termal.liquidCapacity, this.liquids.current().color);

      Draw.rect(termal.topRegion1, this.x, this.y);
      Draw.rect(termal.topRegion2, this.x, this.y)
    }


  })

  return ent
}
print("termal-script-finish-load")
}catch(e){
  print("termal-script" + ": " + e)
}



////////




