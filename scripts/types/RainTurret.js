//caught you dirty script thief how dare you steal pankiwi brrrrrrr
module.exports = (name,Item1,Shoot1,Item2,Shoot2,Item3,Shoot3) => {
  const RainTurret = extendContent(ItemTurret,name, {
  init() {
    this.ammo(
      Item1,Shoot1,
      Item2,Shoot1,
      Item3,Shoot3
    );
    this.super$init();
  }

});

RainTurret.buildType = ent => {
  ent = extend(ItemTurret.ItemTurretBuild, RainTurret, {
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

      this.Bullet = type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle + this.angler, 1 + Mathf.range(RainTurret.velocityInaccuracy), lifeScl);
    }
  });
  return ent
}

}