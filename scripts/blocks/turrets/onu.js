const despaw = new Effect(10, e => {
  Draw.color(Pal.lancerLaser, Color.cyan, Pal.lancerLaser, e.fin())
  Lines.circle(e.x, e.y, e.fout() * 50)
});


const spaw = new Effect(10, e => {
  Draw.color(Pal.lancerLaser, Color.cyan, Pal.lancerLaser, e.fin())
  Lines.circle(e.x, e.y, e.fin() * 120)
});

const hit = new Effect(10, e => {
  Draw.color(Pal.lancerLaser, Color.cyan, Pal.lancerLaser, e.fin())

  Angles.randLenVectors(e.id, 1, 1 + 20 * e.fout(), e.rotation, 360, (x, y) => {
    Drawf.tri(e.x + x, e.y + y, e.fslope() * 3 + 1, e.fslope() * 3 + 1, Mathf.angle(x, y));
  });
})


const shot = extend(BasicBulletType, {
  speed:0.0001,
  damage:30,
  lifetime:100,
  bulletHeight:500,
  hitEffect:Fx.none,
  despawnEffect:Fx.none,
  hitsize:0.0001,
  ammoMultiplier:1,
  shootEffect:Fx.none,
  smokeEffect:Fx.none,
  collides:true,
  collidesAir:true,
  pierce:true,
  draw(e) {
    Draw.color(Color.white)
    Fill.square(e.x, e.y, e.fout() * 2.2,  45)
    Draw.color(Pal.lancerLaser, Color.cyan, Pal.lancerLaser, e.fin())
    Fill.square(e.x, e.y, e.fout() * 1.5,  45)
    Lines.stroke(e.fout() * 2)
    Draw.color(Pal.lancerLaser, Color.cyan, Pal.lancerLaser, e.fin())
    Lines.lineAngle(e.x, e.y, e.rotation(), 120)
    Tmp.v1.trns(e.rotation() + 180, 1);
    Damage.collideLine(e, e.team, this.hitEffect, e.x, e.y, e.rotation(), 120);
    Drawf.light(e.team, e.x, e.y, e.x + Tmp.v1.x, e.y + Tmp.v1.y, Pal.lancerLaser, Pal.lancerLaser, 0.4);
  }

});




const uno = extendContent(PowerTurret, "onu", {})

uno.buildType = ent => {
  ent = extendContent(PowerTurret.PowerTurretBuild, uno, {
    BulletLife: 0,
    vec: new Vec2(),
    B1: null,
    updateTile() {
      this.super$updateTile();
      if (this.isShooting() === true && this.hasAmmo() === true && this.BulletLife > 0) {
        this.vec.trns(this.rotation, 0, 0);
        this.B1.rotation(this.rotation);
        this.B1.set(this.x + this.vec.x, this.y + this.vec.y);
        this.B1.time = 0;
        this.BulletLife -= 1

      }
      if (this.isShooting() === false && this.rotation > 90) {
        this.rotation -= 5
      } else if (this.isShooting() === false && this.rotation < 90) {
        this.rotation = 90
      }
    },
    updateShooting() {
      if (this.BulletLife > 0) return;
      this.super$updateShooting()
    },
    turnToTarget(targetRot) {
      if (this.isShooting() === true && this.hasAmmo() === true) {
        this.rotation += 2;
      }
    },
    bullet(type, angle) {
      this.B1 = type.create(this, this.team, this.x + this.vec.x, this.y + this.vec.y, angle);
      this.BulletLife = 300
      spaw.at(this.x, this.y)
    }
  });
  return ent
}
uno.shootType = shot;