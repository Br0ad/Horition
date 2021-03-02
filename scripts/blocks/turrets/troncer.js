let lib = require("ammon-lib");
const troncer = extendContent(ItemTurret, "troncer", {
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

troncer.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, troncer, {
    shoot(type) {
    let i = (this.shotCounter % troncer.shots) - (troncer.shots - 1) / 2;
    
    troncer.tr.trns(this.rotation - 90, troncer.spread * i + Mathf.range(troncer.xRand), troncer.size * Vars.tilesize / 2 );
    this.bullet(type,this.rotation + Mathf.range(troncer.inaccuracy));
      this.shotCounter++;
      this.effects();
      this.useAmmo();
    }
  })
  return ent
}