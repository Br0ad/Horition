let hit = 15;

const coalshoot = new Effect(20, e => {
  let col1 = Pal.lightFlame;
  let col2 = Pal.lightOrange;
  let col3 = Pal.darkerGray;

  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {

    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const coalbullet = extend(BasicBulletType, {
  hitSize:hit,
lifetime:80,
collides:true,
collidesAir:true,
hittable:true,
pierce:true,
speed:4,
shootEffect:Fx.shootPyraFlame,
hitEffect:Fx.none,
despawnEffect:Fx.none,
status:StatusEffects.burning,
statusDuration:50,
damage:40,

  draw(b) {

  },
  update(b) {
    if (Mathf.random(1) < 0.45) {
      coalshoot.at(b.x, b.y);
    }
  }
});


const pyratiteshot = new Effect(20, e => {
  let col1 = Pal.lightFlame;
  let col2 = Pal.lightOrange;
  let col3 = Pal.darkerGray;

  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {

    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const pyratitebullet = extend(BasicBulletType, {
  collides:true,
collidesAir:true,
hittable:true,
pierce:true,
hitSize:hit,
lifetime:80,
speed:4,
shootEffect:Fx.shootPyraFlame,
hitEffect:Fx.none,
despawnEffect:Fx.none,
status:StatusEffects.burning,
statusDuration:50,
damage:100,

  draw(b) {

  },
  update(b) {
    if (Mathf.random(1) < 0.45) {
      pyratiteshot.at(b.x, b.y);
    }
  }
});



const pyrablastshoot = new Effect(20, e => {
  let col1 = Pal.lightPyraFlame;
  let col2 = Pal.lightOrange;
  let col3 = Pal.darkerGray;

  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {

    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const pyrablastbullet = extend(BasicBulletType, {
  collides:true,
  collidesAir:true,
  hittable:true,
  pierce:true,
  hitSize:hit,
  lifetime:80,
  speed:4,
  shootEffect:Fx.shootPyraFlame,
  hitEffect:Fx.none,
  despawnEffect:Fx.none,
  status:StatusEffects.burning,
  statusDuration:50,
  damage:150,
  draw(b) {

  },
  update(b) {
    if (Mathf.random(1) < 0.45) {
      pyrablastshoot.at(b.x, b.y);
    }
  }
});



const flamer = extendContent(ItemTurret, "Claimer", {
  init() {
    this.ammo(
      Items.coal, coalbullet,
      Items.pyratite,pyratitebullet,
      Items.blastCompound, pyrablastbullet
    );
    this.super$init();
  }
});