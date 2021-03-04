const shot1 = extendContent(BasicBulletType, 1, 40, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -3,
  lifetime: 250,
  width: 10,
  height: 10,
  shrinkY: 0
});

const shot2 = extendContent(BasicBulletType, 1, 60, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -6,
  lifetime: 250,
  width: 10,
  height: 10,
  shrinkY: 0
});

const shot3 = extendContent(BasicBulletType, 1, 80, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -20,
  lifetime: 250,
  width: 10,
  height: 10,
  shrinkY: 0
});

try {
  const ChargerTurret = require("types/RainTurret")

  ChargerTurret("moon", Items.scrap, shot1,Items.titanium, shot2,Items.thorium, shot3)
  print("Finish creator")
} catch (err) {
  print("error creator" + err)

}

/*
const moon = extendContent(ItemTurret, "moon", {
  init() {
    this.ammo(
      Items.scrap, shot1,
      Items.titanium, shot2,
      Items.thorium, shot3
    );
    this.super$init();
  }

});

moon.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, moon, {
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

      this.Bullet = type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle + this.angler, 1 + Mathf.range(moon.velocityInaccuracy), lifeScl);
    }
  });
  return ent
}
*/