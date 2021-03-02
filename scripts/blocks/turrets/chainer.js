let lib = require("ammon-lib");

const chainer = extendContent(ItemTurret, "chainer", {
  init() {
        this.ammo(
          Vars.content.getByName(ContentType.item, "hori-standar-ammon"), lib.standarAmmon,
          Vars.content.getByName(ContentType.item, "hori-tugteno-ammon"), lib.tugtenoAmmon,
          Vars.content.getByName(ContentType.item, "hori-steel-ammon"), lib.steelAmmon,
          Vars.content.getByName(ContentType.item, "hori-selenita-ammon"), lib.selenitaAmmon,
          Vars.content.getByName(ContentType.item, "hori-graphene-ammon"), lib.grapheneAmmon,
        );
    this.super$init();
  }

});

chainer.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, chainer, {
    speed: 0,
    
    updateTile() {
      this.super$updateTile();
      if (this.speed > 0 && this.isActive() === false) {
        this.speed -= (Time.delta / 2);
        if (this.speed < 0) {
          this.speed = 0
        }
      }
    },
    
    shoot(type) {
      
      if (this.isActive() === true) {
        
        if (this.speed < 300) {
          this.speed += 25
        } else if (this.speed > 300) {
          this.speed = 300
        }
        
      }
      
      let i = (this.shotCounter % chainer.shots) - (chainer.shots - 1) / 2;
      
      chainer.tr.trns(this.rotation - 90, chainer.spread * i + Mathf.range(chainer.xRand), chainer.size * Vars.tilesize / 2);
      this.bullet(type, this.rotation + Mathf.range(chainer.inaccuracy));
      this.shotCounter++;
      this.effects();
      this.useAmmo();
    },
    
    baseReloadSpeed() {
      return this.efficiency() * (1 + (this.speed / 5));
    }
    
  });
  return ent
}


