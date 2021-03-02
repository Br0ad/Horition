let lib = require("ammon-lib");

const sprayer = extendContent(ItemTurret, "sprayer", {
  init() {
    this.ammo(
      Items.copper, Bullets.standardCopper,
      Items.thorium, Bullets.standardThorium, Vars.content.getByName(ContentType.item, "hori-standar-ammon"), lib.standarAmmon,
      Vars.content.getByName(ContentType.item, "hori-tugteno-ammon"), lib.tugtenoAmmon,
    );
    this.super$init();
  }

});

sprayer.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, sprayer, {
    speed: 0,
    updateTile() {
      this.super$updateTile();
      if (this.speed > 0 && this.isActive() === false) {
        this.speed -= (Time.delta / 5);
        if (this.speed < 0) {
          this.speed = 0
        }
      }
    },
    shoot(type) {
      if (this.isActive() === true) {
        this.super$shoot(type);
        if (this.speed < 80) {
          this.speed += 7
        } else if (this.speed > 80) {
          this.speed = 80
        }
      }
    },
    
    baseReloadSpeed() {
      return this.efficiency() * (1 + (this.speed / 5));
    }
  });
  return ent
}


