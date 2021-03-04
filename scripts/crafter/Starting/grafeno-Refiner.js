const grafenoRefiner = extendContent(GenericCrafter,"grafeno-Refiner",{
  load(){
    this.super$load();
    this.backRegion = Core.atlas.find(this.name + "-back");
    this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    this.buttonRegion = Core.atlas.find(this.name + "-buttom")
  },
  icons(){
    return [
      this.backRegion,
      this.rotatorRegion,
      this.buttonRegion
      ]
  }
});


grafenoRefiner.buildType = ent => {
  ent = extend(GenericCrafter.GenericCrafterBuild, grafenoRefiner,{
    draw(){
      let b = grafenoRefiner;
      
      Draw.rect(b.backRegion,this.x,this.y);
      Draw.rect(b.rotatorRegion,this.x,this.y,this.totalProgress * this.warmup * this.totalProgress);
      
      Draw.color(Pal.accent);
      Draw.alpha(this.warmup);
      
      Lines.lineAngleCenter(this.x + Mathf.sin(this.totalProgress, 7,7),this.y,90,7 * 2.5);
      Lines.lineAngleCenter(this.x - Mathf.sin(this.totalProgress, 7,7),this.y,90,7 * 2.5);
      Lines.lineAngleCenter(this.x,this.y+  Mathf.sin(this.totalProgress, 7,7),180,7 * 2.5);
      Lines.lineAngleCenter(this.x,this.y+-Mathf.sin(this.totalProgress, 7,7),180,7 * 2.5);
      Draw.color();
      Draw.rect(b.buttonRegion,this.x,this.y)
      Draw.reset();
      
    }
  })
  return ent
}