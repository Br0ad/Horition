let life = 40;

const copfrag = extend(BasicBulletType, {
  draw(b) {
    Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, b.fout());
  Fill.circle(b.x,b.y,1)
  }
});

copfrag.damage = 5;
copfrag.speed = 2;
copfrag.shotEffect = Fx.shootSmall;
copfrag.smokeEffect = Fx.shootSmallSmoke;
copfrag.lifetime = 10;
copfrag.collides = true;

const copbullet = extend(MissileBulletType, {
  draw(b) {
    Draw.color(Color.white, Pal.bulletYellow, Pal.bulletYellowBack, b.fin());
    Fill.circle(b.x, b.y, 2.3);
  }
});

copbullet.damage = 15;
copbullet.speed = 6;
copbullet.shotEffect = Fx.shootSmall;
copbullet.smokeEffect = Fx.shootSmallSmoke;
copbullet.lifetime = life;
copbullet.hitSize = 8;
copbullet.collides = true;
copbullet.fragBullets = 2;
copbullet.fragVelocityMin = 1;
copbullet.fragVelocityMax = 3;
copbullet.fragBullet = copfrag;

const titaniumgrag = extend(BasicBulletType, {
  draw(b) {
    Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, b.fout());
    Fill.circle(b.x, b.y, 1)
  }
});

titaniumgrag.damage = 10;
titaniumgrag.speed = 3;
titaniumgrag.shotEffect = Fx.shootSmall;
titaniumgrag.smokeEffect = Fx.shootSmallSmoke;
titaniumgrag.lifetime = 10;
titaniumgrag.collides = true;

const titaniumbullet = extend(MissileBulletType,{
  draw(e){
    Draw.color(Pal.bulletYellow, Pal.missileYellow, Pal.bulletYellowBack, e.fin())
    
    Fill.circle(e.x, e.y, 2.3)
  }
});

titaniumbullet.damage = 25;
titaniumbullet.speed = 6;
titaniumbullet.shotEffect = Fx.shootSmall;
titaniumbullet.smokeEffect = Fx.shootSmallSmoke;
titaniumbullet.lifetime = life;
titaniumbullet.hitSize = 8;
titaniumbullet.collides = true;
titaniumbullet.fragBullets = 4;
titaniumbullet.fragVelocityMin = 0;
titaniumbullet.fragVelocityMax = 1;
titaniumbullet.fragBullet = titaniumgrag;


const metafrag = extend(BasicBulletType, {
  draw(b) {
    Draw.color(Pal.bulletYellow, Pal.bulletYellowBack, b.fout());
    Fill.circle(b.x, b.y, 1)
  }
});

metafrag.damage = 15;
metafrag.speed = 3;
metafrag.shotEffect = Fx.shootSmall;
metafrag.smokeEffect = Fx.shootSmallSmoke;
metafrag.lifetime = 10;
metafrag.collides = true;

const metabullet = extend(MissileBulletType, {
  draw(e){
    Draw.color(Pal.bulletYellow, Pal.missileYellow, Pal.bulletYellowBack, e.fin())
    
    Fill.circle(e.x, e.y, e.fslope() + 0.8 * 2)
  }
});

metabullet.damage = 35;
metabullet.speed = 6;
metabullet.shotEffect = Fx.shootSmall;
metabullet.smokeEffect = Fx.shootSmallSmoke;
metabullet.lifetime = life;
metabullet.hitSize = 8;
metabullet.collides = true;
metabullet.fragBullets = 6;
metabullet.fragVelocityMin = 0;
metabullet.fragVelocityMax = 1;
metabullet.fragBullet = metafrag;

const infuser = extendContent(ItemTurret, "infuser", {
  init() {
    this.ammo(
      Items.copper, copbullet,
      Items.titanium, titaniumbullet,
      Items.metaglass, metabullet
    );
    this.super$init();
  }
});
