
const titaniumbullet = extend(ShrapnelBulletType,{
  length : 100,
  width:30,
  lifetime:20,
  damage:180,
  ammoMultiplier:1,
  hitEffect:Fx.hitLancer,
  shootEffect:Fx.lightningShoot
});
//titaniumbullet.toColor = Pal.lancerLaser;
//titaniumbullet.fromColor = Color.valueOf("7DE7FFFF");

const graphitebullet = extend(ShrapnelBulletType,{
  length:100,
  width:30,
  damage:300,
  lifetime:20,
  ammoMultiplier:2,
  hitEffect:Fx.hitLancer,
  shootEffect:Fx.lightningShoot
});


//graphitebullet.toColor = Pal.lancerLaser;
//graphitebullet.fromColor = Color.white;


const sporeShotFx = new Effect(20, e => {
  for (let i = 0; i < 4; i++) {
    Draw.color(Pal.spore,
        Pal.sap, e.fin()),
      Angles.randLenVectors(e.id, 4, 15 * e.finpow(), e.rotation, 10, (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 3 + 1);
      });
  }
});
const sporeFx = new Effect(15,e => {
   for(let i = 0; i < 4 ; i++){
     Draw.color(Pal.spore,
     Pal.sap, e.fin()),
    Angles.randLenVectors(e.id, 7, 25 * e.finpow(), e.rotation, 50, (x, y) => {
      Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 5  + 2 );
    });
   }
});
const sporebullet = extend(ShrapnelBulletType ,{
  length:100,
  width:10,
  damage:100,
  lifetime:20,
  ammoMultiplier:2,
  toColor:Pal.spore,
  shootEffect:sporeShotFx,
  hitEffect:sporeFx,
  fromColor:Pal.sapBullet,
  smokeEffect:sporeFx
});


const bictfuse = extendContent(ItemTurret, "bictfuse", {
  init(){
    this.ammo(
      Items.sporePod,sporebullet,
      Vars.content.getByName(ContentType.item,"hori-tugteno"),titaniumbullet,
      Vars.content.getByName(ContentType.item,"hori-Graphene")
,graphitebullet
      );
      this.super$init();
  }
});


