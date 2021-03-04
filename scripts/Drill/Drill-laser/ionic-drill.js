const ionicDrill = extendContent(Drill,"ionic-drill",{
  load(){
    this.super$load();
    this.backRegion = Core.atlas.find(this.name + "-back");
    this.Region = Core.atlas.find(this.name);
    this.TopRegion = Core.atlas.find(this.name + "-top")
    this.itemRegion = Core.atlas.find(this.name + "-ItemRegion")
  },
  icons(){
    return [
      this.backRegion,
      this.Region,
      this.TopRegion
      ]
  }
  
});


ionicDrill.buildType = ent => {
  ent = extend(Drill.DrillBuild,ionicDrill,{
    draw(){
      let b = ionicDrill
      
      Draw.rect(b.backRegion, this.x,this.y)
      
     Draw.blend(Blending.additive);
   
   Draw.color(Pal.accent);
   Draw.alpha(0.2)
   /*
      for(let i = 0; i < 12; i++){
         Lines.lineAngleCenter(this.x,this.y,32 * i ,10 * 3);
      }
   */
 //  Draw.alpha(0.5)
   Draw.alpha(this.warmup * 1 * Mathf.absin(Time.time, 3, 0.5));
   
   for (let i = 0; i < 11; i++) {
     Drawf.tri(this.x, this.y, 15, 20, this.rotation + this.timeDrilled * 3 + 32 * i);
   }
   Draw.color(this.dominantItem.color)
   Draw.alpha(0.2)
   for (let i = 0; i < 11; i++) {
     Drawf.tri(this.x, this.y, 10, 18, this.rotation + this.timeDrilled * 3  + 32 * i);
   }
   //Draw.reset();
      Draw.color();
      Draw.alpha(1);
      Draw.blend();
      Draw.rect(b.Region,this.x,this.y);
      Draw.rect(b.TopRegion,this.x,this.y);
      Draw.color(this.dominantItem.color);
      Draw.rect(b.itemRegion, this.x,this.y);
      Draw.color()
    }
  })
  return ent
};