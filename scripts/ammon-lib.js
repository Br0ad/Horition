//caught you dirty script thief how dare you steal pankiwi brrrrrrr
const standarAmmon = extendContent(BasicBulletType,5,10,"shell",{
  collidesAir:true,
  pierce: false,
  knockback:0.3,
  lifetime:80,
  width: 8,
  height: 8,
  shrinkY: 0
});

const tugtenoAmmon = extendContent(BasicBulletType, 5, 20,"shell",{
  collidesAir: true,
  pierce: false,
  knockback: 0.3,
  lifetime: 80,
  width: 8,
  height: 8,
  shrinkY: 0,
  fragBullets: 10,
  fragBullet: Bullets.fragGlassFrag
});

const steelAmmon = extendContent(BasicBulletType, 5, 30,"shell",{
  collidesAir: true,
  knockback: 0,
  pierce: true,
  lifetime: 80,
  width: 7,
  height: 7,
  shrinkY: 0
});

const selenitaAmmon = extendContent(BasicBulletType, 5, 40,"shell",{
  collidesAir: true,
  pierce: false,
  knockback: 0,
  lifetime: 80,
  width: 8,
  height: 8,
  shrinkY: 0,
  lightningDamage: 10,
  lightning: 3,
  lightningLength: 10
});

const acid = new StatusEffect("acid");

acid.damage = 0.2;
acid.effect = Fx.impactsmoke;

const grapheneAmmon = extendContent(BasicBulletType, 5, 60,"shell",{
  collidesAir: true,
  knockback: 0,
  pierce: true,
  lifetime: 80,
  width: 8,
  height: 8,
  shrinkY: 0,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  splashDamageRadius: 100,
  splashDamage: 15,
  status: acid,
  statusDuration: 10
});

module.exports = {
  standarAmmon:standarAmmon,
  tugtenoAmmon:tugtenoAmmon,
  steelAmmon:steelAmmon,
  selenitaAmmon:selenitaAmmon,
  grapheneAmmon:grapheneAmmon
}