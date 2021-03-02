let hit = 15;
/*
pyrabullet.lifetime = 50;
pyrabullet.pierce = true;
pyrabullet.collidesAir = false;
pyrabullet.keepVelocity = false;
pyrabullet.hittable = false;
pyrabullet.speed = 4;
pyrabullet.shootEffect = Fx.shootPyraFlame;
pyrabullet.hitEffect = Fx.hitFlameSmall;
pyrabullet.despawnEffect = Fx.none;
pyrabullet.status = StatusEffects.burning;
pyrabullet.statusDuration = 200;
pyrabullet.damage = 25;
*/
const coalshoot = new Effect(20,e => {
  let col1 = Pal.lightFlame;
  let col2 = Pal.lightOrange;
  let col3 = Pal.darkerGray;
  
  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {
  
    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const coalbullet = extend(BasicBulletType,{
  hitSize:hit,
  lifetime:50,
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
  damage:20,
  draw(b){
    
  },
  update(b){
    if(Mathf.random(1) < 0.45){
      coalshoot.at(b.x,b.y);
    }
  }
});



const poreshoot = new Effect(20, e => {
  let col1 = Pal.thoriumPink;
  let col2 = Pal.lightOrange;
  let col3 = Pal.spore;

  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {

    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const porestatus = new StatusEffect("porestatus");

porestatus.damage = 0.7;
porestatus.effect = poreshoot;

const porebullet = extend(BasicBulletType, {
  draw(b) {

  },
  update(b) {
    if (Mathf.random(1) < 0.45) {
      poreshoot.at(b.x, b.y);
    }
  }
});




porebullet.collides = true;
porebullet.collidesAir = true;
porebullet.hittable = true;
porebullet.pierce = true;
porebullet.hitSize = hit;
porebullet.lifetime = 50;
porebullet.speed = 4;
porebullet.shootEffect = Fx.shootPyraFlame;
porebullet.hitEffect = Fx.none;
porebullet.despawnEffect = Fx.none;
porebullet.status = porestatus;
porebullet.statusDuration = 50;
porebullet.damage = 40;


const pyrashoot = new Effect(20, e => {
  let col1 = Pal.lightPyraFlame;
  let col2 = Pal.lightOrange;
  let col3 = Pal.darkerGray;

  Draw.color(col1, col2, col3, e.fin());
  Angles.randLenVectors(e.id, 2, e.finpow() * 15, e.rotation, 40, (x, y) => {

    Fill.circle(e.x + x, e.y + y, e.fslope() + 1 * 2)
  });
});

const pyrabullet = extend(BasicBulletType, {
  draw(b) {

  },
  update(b) {
    if (Mathf.random(1) < 0.45) {
      pyrashoot.at(b.x, b.y);
    }
  }
});

pyrabullet.collides = true;
pyrabullet.collidesAir = true;
pyrabullet.hittable = true;
pyrabullet.pierce = true;
pyrabullet.hitSize = hit;
pyrabullet.lifetime = 50;
pyrabullet.speed = 4;
pyrabullet.shootEffect = Fx.shootPyraFlame;
pyrabullet.hitEffect = Fx.none;
pyrabullet.despawnEffect = Fx.none;
pyrabullet.status = StatusEffects.burning;
pyrabullet.statusDuration = 50;
pyrabullet.damage = 60;

const flamer = extendContent(ItemTurret, "flamer", {
  init() {
    this.ammo(
      Items.coal, coalbullet,
      Items.sporePod, porebullet,
      Items.pyratite, pyrabullet
    );
    this.super$init();
  }
});