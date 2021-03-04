let lib = require("ammon-lib");

const minigun = extendContent(ItemTurret, "minigun", {
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

minigun.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, minigun, {
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
        this.super$shoot(type);
        if (this.speed < 100) {
          this.speed += 10
        } else if (this.speed > 100) {
          this.speed = 100
        }
      }
    },
    baseReloadSpeed() {
      return this.efficiency() * (1 + (this.speed / 5));
    }
  });
  return ent
}


