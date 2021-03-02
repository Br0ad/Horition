//caught you dirty script thief how dare you steal pankiwi brrrrrrr
const standarMissil = extendContent(MissileBulletType,2,50,{
  homingPower: 0.08,
  shrinkY:  0,
  width: 8,
  height:  8,
  lifetime: 250,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion
});

const tugtenoMissil = extendContent(MissileBulletType, 4, 60, {
  backColor: Color.valueOf("57E6BCFF"),
  frontColor: Color.valueOf("ADFFF0FF"),
  homingPower: 0.09,
  shrinkY: 0,
  width: 8,
  height: 8,
  hitSize: 15,
  lifetime: 150,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  fragBullets: 3,
  fragVelocityMin: 1,
  fragVelocityMax: 3,
  fragBullet: Bullets.standardDense
});

const steelMissil = extendContent(MissileBulletType, 3,70, {
 backColor: Color.valueOf("989898FF"),
  frontColor: Color.valueOf("D7D7D7FF"),
  homingPower: 0.08,
  shrinkY: 0,
  width: 8,
  height: 8,
  lifetime: 150,
  hitEffect: Fx.plasticExplosionFlak,
  despawnEffect: Fx.plasticExplosionFlak,
  splashDamage: 30,
  splashDamageRadius: 40
});

const MiniMissil = extendContent(MissileBulletType, 1, 30, {
  homingPower: 1000,
  shrinkY: 0,
  width: 6,
  height: 6,
  lifetime: 80,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
});

const selenitaMissil = extendContent(MissileBulletType, 3, 80, {
  backColor: Color.valueOf("9C4E3AFF"),
  frontColor: Color.valueOf("F4BC93FF"),
  homingPower: 0.09,
  shrinkY: 0,
  hitSize: 20,
  width: 8,
  height: 8,
  lifetime: 150,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  fragBullets: 6,
  fragVelocityMin: 1,
  fragVelocityMax: 3,
  fragBullet: MiniMissil
});

const grapheneMissil = extendContent(MissileBulletType, 5,90, {
 backColor: Color.valueOf("A457E6FF"),
  frontColor: Color.valueOf("D5ADFFFF"),
  homingPower: 100,
  homingRange: 100,
  shrinkY: 0,
  width: 8,
  height: 8,
  lifetime: 150,
  hitEffect: Fx.plasticExplosionFlak,
  despawnEffect: Fx.plasticExplosionFlak,
  splashDamage : 40,
  splashDamageRadius : 60
});

const electricMissil = extendContent(MissileBulletType, 3, 90, {
  backColor: Color.valueOf("5762E6FF"),
  frontColor: Color.valueOf("AEADFFFF"),
  homingPower: 0.09,
  shrinkY: 0,
  width: 8,
  height: 8,
  lifetime: 150,
  hitEffect: Fx.plasticExplosionFlak,
  despawnEffect: Fx.plasticExplosionFlak,
  lightningDamage: 40,
  lightning: 5,
  lightningLength: 20
});

const fireMissil = extendContent(MissileBulletType, 4, 90, {
  backColor: Color.valueOf("FFADADFF"),
  frontColor: Color.valueOf("E65757FF"),
  homingPower: 0.09,
  shrinkY: 0,
  width: 8,
  height: 8,
  lifetime: 150,
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  fragBullets: 5,
  fragVelocityMin: 1,
  fragVelocityMax: 2,
  fragBullet: Bullets.heavySlagShot,
  splashDamage: 40,
  splashDamageRadius: 60
});

module.exports = {
  standarMissil:standarMissil,
  tugtenoMissil:tugtenoMissil,
  steelMissil:steelMissil,
  MiniMissil:MiniMissil,
  selenitaMissil:selenitaMissil,
  grapheneMissil:grapheneMissil,
  electricMissil:electricMissil,
  fireMissil:fireMissil
};