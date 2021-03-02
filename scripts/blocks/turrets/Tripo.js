const shot1 = extendContent(BasicBulletType, 1, 30, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -1,
  lifetime: 200,
  width: 7,
  height: 7,
  shrinkY: 0
});

const shot2 = extendContent(BasicBulletType, 1, 40, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -5,
  lifetime: 200,
  width: 7,
  height: 7,
  shrinkY: 0
});

const shot3 = extendContent(BasicBulletType, 1, 60, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -10,
  lifetime: 200,
  width: 7,
  height: 7,
  shrinkY: 0
});

try {
  const ChargerTurret = require("types/RainTurret")

  ChargerTurret("Tripo", Items.scrap, shot1, Items.lead, shot2, Items.titanium, shot3)
  print("Finish creator")
} catch (err) {
  print("error creator" + err)

}

/*
const Tripo = extendContent(ItemTurret, "Tripo", {
  init() {
    this.ammo(
      Items.scrap, shot1,
      Items.lead, shot2,
      Items.titanium, shot3
    );
    this.super$init();
  }

});

Tripo.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, Tripo, {
    angler: 0,
    Bullet: null,
    updateTile() {
      this.super$updateTile();
      if (this.Bullet != null) {
        if (this.isShooting() === true && this.hasAmmo() === true) {
          this.angler += 1
        }
        if (this.isShooting() === false && this.hasAmmo() === true) {
          this.angler = 0
        }
      }
    },
    bullet(type, angle) {
      const vec = new Vec2();
      vec.trns(this.rotation, 0);

      let lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + vec.x, this.y + vec.y, this.targetPos.x, this.targetPos.y) / type.range(), this.minRange / type.range(), this.range / type.range()) : 1;

      this.Bullet = type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle + this.angler, 1 + Mathf.range(Tripo.velocityInaccuracy), lifeScl);
    }
  });
  return ent
}
*/