const trail = new Effect(10, e => {
  Draw.color(Pal.lancerLaser);
  Fill.circle(e.x, e.y, e.fout() * 2);
})

const despaw = new Effect(20, e => {
  Draw.color(Pal.lancerLaser);
  Fill.circle(e.x, e.y, e.fin() * 4);
});
/*
const shotfx = new Effect(60, e => {
  Draw.color(Pal.lancerLaser);
  Fill.circle(e.x, e.y, e.fin() * 4);
  Draw.color();
  Fill.circle(e.x, e.y, e.fin() * 3.5);
});
*/
const charger = new Effect(40, e => {
  Draw.color(Pal.lancerLaser);
  Fill.circle(e.x, e.y, e.fin() * 4);
  Draw.color();
  Fill.circle(e.x, e.y, e.fin() * 3.5);
  Draw.color(Pal.lancerLaser);
  Angles.randLenVectors(e.id, 5, e.fout() * 40, e.rotation, 120, (x, y) => {
  
    Fill.circle(e.x + x, e.y + y, e.fin() * 1);
  })
});

const frag2 = extendContent(BasicBulletType, {
  damage:20,
  speed:1,
  lifetime:40,
  hitSize:4,
  hitEffect:Fx.hitLancer,
  despawnEffect:despaw,
  shootEffect:Fx.lancerLaserShoot,
  hitSound:Sounds.none,
  splashDamage:10,
  splashDamageRadius:20,
  draw(e) {
    Draw.color(Pal.lancerLaser)
    Fill.circle(e.x, e.y, e.fin() * 3 + 0.9);
    Draw.color();
    Fill.circle(e.x, e.y, e.fin() * 2 + 0.9);
  },
  update(b) {
      if (b.timer.get(0, (4 + b.fslope() * 2) * 1)) {
        trail.at(b.x, b.y)
      }
  }
})



const frag = extendContent(BasicBulletType, {
  damage:30,
  speed:2,
  lifetime:50,
  hitSize:4,
  hitEffect:Fx.hitLancer,
  despawnEffect:despaw,
  shootEffect:Fx.lancerLaserShoot,
  hitSound:Sounds.none,
  fragBullets:4,
  fragVelocityMin:1,
  fragVelocityMax:3,
  fragBullet:frag2,
  draw(e) {
    Draw.color(Pal.lancerLaser)
    Fill.circle(e.x, e.y, e.fin() * 4 + 0.9);
    Draw.color();
    Fill.circle(e.x, e.y, e.fin() * 3 + 0.9);
  },
  update(b) {
      if (b.timer.get(0, (4 + b.fslope() * 2) * 1)) {
        trail.at(b.x, b.y)
      }
  }
});



const shot = extendContent(BasicBulletType,{
  damage:40,
  speed:3,
  lifetime:80,
  knockback:8,
  pierce:false,
  pierceBuilding:false,
  hitSize:7,
  hitEffect:Fx.hitLancer,
  collides:true,
  collidesTiles:false,
  despawnEffect:despaw,
  shootEffect:Fx.lancerLaserShoot,
  hitSound:Sounds.none,
  fragBullets:4,
  fragVelocityMin:1,
  fragVelocityMax:3,
  fragBullet:frag,
  draw(e){
    Draw.color(Pal.lancerLaser)
    Fill.circle(e.x, e.y, e.fin() * 5 + 0.9);
    Draw.color();
    Fill.circle(e.x, e.y, e.fin() * 4 + 0.9);
  },
  update(b) {
      if (b.timer.get(0, (4 + b.fslope() * 2) * 1)) {
        trail.at(b.x, b.y)
      }
  }
})




const divisor = extendContent(PowerTurret,"divisor",{});
divisor.recoil = 3;
divisor.restitution = 0.015;
divisor.shootType = shot;