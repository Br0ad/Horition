const shot1 = extendContent(BasicBulletType, 1, 20, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -1,
  lifetime: 120,
  width: 5,
  height: 5,
  shrinkY: 0
});

const shot2 = extendContent(BasicBulletType, 1, 30, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -2,
  lifetime: 120,
  width: 5,
  height: 5,
  shrinkY: 0
});

const shot3 = extendContent(BasicBulletType, 1, 40, "shell", {
  collidesAir: true,
  pierce: true,
  knockback: -3,
  lifetime: 120,
  width: 5,
  height: 5,
  shrinkY: 0
});

try {
  const ChargerTurret = require("types/RainTurret")

  ChargerTurret("star",Items.scrap, shot1,
    Items.copper, shot2,
    Items.lead, shot3)
  print("Finish creator")
} catch (err) {
  print("error creator" + err)

}

/*

const star = extendContent(ItemTurret, "star", {
  init() {
    this.ammo(
      Items.scrap, shot1,
      Items.copper, shot2,
      Items.lead, shot3
    );
    this.super$init();
  }

});

star.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, star, {
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

      this.Bullet = type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle + this.angler, 1 + Mathf.range(star.velocityInaccuracy), lifeScl);
    }
  });
  return ent
}
*/