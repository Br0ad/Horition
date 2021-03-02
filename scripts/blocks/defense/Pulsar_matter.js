
const shot = extend(BasicBulletType, {
  speed: 0.0000,
  damage: 40,
  lifetime: 300,
  knockback: 50,
  hitEffect: Fx.none,
  despawnEffect: Fx.none,
  shootEffect: Fx.none,
  smokeEffect: Fx.none,
  pierce: true,
  draw(e) {
    let range = 400
    Draw.color(Color.white)
    Lines.stroke(e.fout() * 3)
    Lines.circle(e.x, e.y, e.fin() * range)
    Damage.damage(e.team, e.x, e.y, e.fin() * range, this.damage, true, true);
  }

});




const pulsar = extendContent(PowerTurret, "Pulsar-Matter", {
  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name)
    this.heatregion = Core.atlas.find(this.name + "-heat")
  },
  icons() {
    return [
      this.region
      ]
  },
  setStats() {
    this.super$setStats();
    this.stats.remove(Stat.inaccuracy);
    this.stats.remove(Stat.reload);
    this.stats.remove(Stat.targetsAir);
    this.stats.remove(Stat.targetsGround);
  }
})

pulsar.buildType = ent => {
  ent = extendContent(PowerTurret.PowerTurretBuild, pulsar, {
    TimerUpdater: 0,
    Shouter: 0,
    hasAmmo(){
      return this.power.status > 0 && this.power.status >= 0
    },
    draw() {
      Draw.rect(pulsar.region, this.x, this.y);
      if (this.hasAmmo()) {
      if (this.hasAmmo() && this.isShooting()) {
          Draw.color(Color.red)
        } else {
          Draw.color(Pal.accent)
        }
        Draw.blend(Blending.additive);
        Draw.alpha(Mathf.absin(Time.time,8,0.3))
        Lines.circle(this.x, this.y,Mathf.absin(Time.time,10,12))
        Draw.rect(pulsar.heatregion, this.x, this.y)
        Draw.alpha(1)
        
        
        Draw.alpha(Mathf.absin(Time.time,20,0.8))
        Lines.circle(this.x, this.y,Mathf.absin(Time.time,10,8))
        Draw.alpha(1)
        Draw.blend()
        
      };
      if (this.hasAmmo()) {
        let Tim = Time.time
        let p = 10
        let r = 0 + Tim
        let Ty = Angles.trnsy(r, p)
        let Tx = Angles.trnsx(r, p)
        var z = Draw.z();
        Draw.blend(Blending.additive);
        Draw.z(Layer.turret);
        if(this.hasAmmo() && this.isShooting()){
          Draw.color(Color.red)
        }else{
          Draw.color(Pal.accent)
        } 
        Draw.alpha(0.5)
        Fill.circle(this.x + Tx, this.y + Ty, 1.5)
        p = 7
        r = 90 + Tim
        Ty = Angles.trnsy(r, p)
        Tx = Angles.trnsx(r, p)
        Fill.circle(this.x + Tx, this.y + Ty, 1.5)
        p = 5
        r = 240 + Tim
        Ty = Angles.trnsy(r, p)
        Tx = Angles.trnsx(r, p)
        Fill.circle(this.x + Tx, this.y + Ty, 1.5)
        p = 2
        r = 0 + Tim
        Ty = Angles.trnsy(r, p)
        Tx = Angles.trnsx(r, p)
        Fill.circle(this.x + Tx, this.y + Ty, 1.5)
        Draw.color()
        Draw.alpha(1)
        Draw.z(z)
        Draw.blend()
      }
    },
   shoot(ammo) {
      this.recoil = pulsar.recoilAmount;
      this.heat = 1;
      this.bullet(ammo, this.rotation + Mathf.range(pulsar.inaccuracy));
      this.effects();
    }
  });
  return ent
}
pulsar.shootType = shot;