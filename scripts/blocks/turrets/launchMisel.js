const scrapfrag = extend(BasicBulletType,{});

scrapfrag.damage = 10
scrapfrag.lifetime = 35;
scrapfrag.ammoMultiplier = 5;
scrapfrag.shootEffect = Fx.shootSmall;
scrapfrag.reloadMultiplier = 0.5;
scrapfrag.width = 6;
scrapfrag.height = 8;
scrapfrag.hitEffect = Fx.flakExplosion;
scrapfrag.splashDamage = 10;
scrapfrag.splashDamageRadius = 18;


const scrapbullet = extend(MissileBulletType,{
  draw(b){
    Draw.color(Pal.missileYellow, Pal.missileYellowBack, Pal.meltdownHit, b.fin());
    Fill.circle(b.x, b.y, b.fout() * 5);
  }
});

scrapbullet.damage = 30;
scrapbullet.speed = 5;
scrapbullet.hitEffect = Fx.flakExplosion;
scrapbullet.shootEffect = Fx.shootSmall;
scrapbullet.lifetime = 60;
scrapbullet.hitSize = 8;
scrapbullet.collides = true;
scrapbullet.fragBullets = 3;
scrapbullet.fragVelocityMin = 1;
scrapbullet.fragVelocityMax = 3;
scrapbullet.fragBullet = scrapfrag;

const shotFx = new Effect(20, e => {
  Draw.color(Color.valueOf("E06FFFFF"), Color.lightGray, e.fout()); 
  Fill.circle(e.x, e.y, e.fout() + 1 * 2);
});

const sporevenom = new Effect(10, e => {
  Draw.color(Color.valueOf("E06FFFFF"), Color.lightGray, e.fin());
  Fill.circle(e.x, e.y, e.fout() + 1 * 2);
  Lines.spikes(e.x, e.y, e.fin() * 3, e.fout() * 5, 3, e.fin() * 360);
});

const Sporevenom = new StatusEffect("spore Venom");

Sporevenom.effect = sporevenom;
Sporevenom.damage = 0.4;

const fragSpore = extend(BasicBulletType, {
  draw(e) {
    Draw.color(Color.valueOf("E06FFFFF"), Color.lightGray, e.fin());
    Fill.circle(e.x, e.y, e.fout() + 1 * 2);
    Lines.spikes(e.x, e.y, e.fin() * 3, e.fout() * 5, 3, e.fin() * 360);
  }
});

fragSpore.collides = true;
fragSpore.status = Sporevenom;
fragSpore.statusDuration = 500;
fragSpore.damage = 15;
fragSpore.speed = 1;
fragSpore.hitEffect = Fx.none;
fragSpore.shootEffect = Fx.none;
fragSpore.splashDamage = 5;
fragSpore.splashDamageRadius = 30;
fragSpore.lifetime = 70;
fragSpore.collides = true;
fragSpore.hitSize = 20;
fragSpore.despawnEffect = shotFx;

const sporebullet = extend(MissileBulletType, {
  draw(b) {
Draw.color(Color.valueOf("E06FFFFF"), Color.lightGray, b.fin()),
   Fill.circle(b.x, b.y, b.fout() + 1 * 4),
  Lines.spikes(b.x, b.y, b.fout() * 5, b.fout() + 2 * 2, 6, b.fout() * 360)
  }
});

sporebullet.collides = true;
sporebullet.damage = 50;
sporebullet.speed = 5;
sporebullet.hitEffect = shotFx;
sporebullet.shootEffect = Fx.none;
sporebullet.lifetime = 60;
sporebullet.hitSize = 8;
sporebullet.collides = true;
sporebullet.fragBullets = 2;
sporebullet.fragVelocityMin = 3;
sporebullet.fragVelocityMax = 3;
sporebullet.fragBullet = fragSpore;
sporebullet.despawnEffect = Fx.none;
sporebullet.trailColor = Pal.spore;




const thorifrag = extend(BasicBulletType,{
  draw(b){
    Draw.color(Pal.thoriumPink, Pal.sap, Pal.thoriumPink, b.fin());
    Fill.circle(b.x, b.y, b.fout() + 0.8 * 1.8);
  }
});

thorifrag.damage = 30
thorifrag.lifetime = 35;
thorifrag.ammoMultiplier = 5;
thorifrag.shootEffect = Fx.none;
thorifrag.reloadMultiplier = 0.5;
thorifrag.hitEffect = Fx.none;
thorifrag.splashDamage = 18;
thorifrag.splashDamageRadius = 15;
thorifrag.despawnEffect = Fx.none;
thorifrag.hitSize = 15;


const thoribullet = extend(MissileBulletType, {
  draw(b){
    Draw.color(Pal.thoriumPink, Pal.sap, Pal.thoriumPink, b.fout());
   Fill.circle(b.x, b.y, b.fout()+1 * 2.5)
  }
});

thoribullet.damage = 60;
thoribullet.speed = 5;
thoribullet.hitEffect = Fx.none;
thoribullet.shootEffect = Fx.none;
thoribullet.lifetime = 60;
thoribullet.hitSize = 8;
thoribullet.collides = true;
thoribullet.fragBullets = 6;
thoribullet.fragVelocityMin = 1;
thoribullet.fragVelocityMax = 3;
thoribullet.fragBullet = thorifrag;
thoribullet.despawnEffect = Fx.none;
thoribullet.homingPower = 0.9;
thoribullet.trailColor = Pal.thoriumPink;

const launchMisel = extendContent(ItemTurret, "launchMisel", {
  init() {
    this.ammo(
      Items.scrap, scrapbullet,
      Items.sporePod, sporebullet,
      Items.thorium, thoribullet
   //   Items.plastanium, plasbumllet
    );
    this.super$init();
  }
});



/////
