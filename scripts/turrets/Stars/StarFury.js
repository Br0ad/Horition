const SoundH = require("SoundH")
const FragDespaw = new Effect(10, e => {
  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));
  Lines.circle(e.x, e.y, 0.1 + e.fout() * 10);
});

const charger = new Effect(20, e => {

  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));
  
  Angles.randLenVectors(e.id, 5, e.fout() * 40, e.rotation, 360, (x, y) => {
  
    for (var i = 0; i < 5; i++) {
      Drawf.tri(e.x + x, e.y + y, e.fin() * 5, e.fin() * 5, i * 72 + Time.time * 2);
    }
  
  })
})

const StarBling = new Effect(30, e => {
  
  for (var i = 0; i < 5; i++) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i));
    Drawf.tri(e.x , e.y , e.fin() * 5, e.fin() * 5, i * 72 + Time.time * 2);
  }
})

const Stardelay = new Effect(10, e => {
  for (var i = 0; i < 5; i++) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i));
    Drawf.tri(e.x, e.y, e.fin() * 5,fout * 5, i * 72 + Time.time * 2);
  }
})

const StarShot = new Effect(10, e => {
  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));
  
  
    Drawf.tri(e.x, e.y, 10 * e.fout(), 50, e.rotation + 90 );
  Drawf.tri(e.x, e.y, 10 * e.fout(), 50, e.rotation - 90 );
})

const Frag = extendContent(BasicBulletType, {
  damage: 80,
  speed: 3,
  lifetime: 80,
  knockback: -10,
  pierce: true,
  pierceBuilding: false,
  hitSize: 5,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: FragDespaw,
  shootEffect: StarShot,
  hitSound: Sounds.none,
  draw(e) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + e.fin() * 10 - e.fout() * 10));
    
    for (let i = 0; i < 5; i++) {
      Drawf.tri(e.x, e.y, 7, e.fslope() + 2 * 3, i * 72 + Time.time * 2);
    }
  }
});



const despaw2 = new Effect(10, e => {
  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));
  Lines.circle(e.x, e.y, 0.1 + e.fout() * 30);


  for (let i = 0; i < 6; i++) {
    Drawf.tri(e.x, e.y, e.fin() * 9, e.fout() * 30, i * 72 + Time.time * 5);

  };
});

const shot2 = extendContent(BasicBulletType, {
  damage: 150,
  speed: 3,
  lifetime: 110,
  knockback: 6,
  pierce: true,
  pierceBuilding: false,
  hitSize: 10,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: despaw2,
  shootEffect: Fx.none,
  hitSound: SoundH.Star_spin,
  splashDamage: 10,
  splashDamageRadius: 40,
  init(b){
    if(!b)return
    b.data = new Trail(30)
  },
  draw(e) {
    
    for (let i = 0; i < 6; i++) {
      Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i * 10));
      Drawf.tri(e.x, e.y, 9, 5 + e.fslope() * 10, i * 72 + Time.time * 3);

    };

    Draw.color();
    for (let i = 0; i < 6; i++) {
      Drawf.tri(e.x, e.y, 7, 3 + e.fslope() * 10, i * 72 + Time.time * 3);
    }
    
    
    e.data.draw(Pal.lancerLaser,2 + e.fslope() * 2)
  },

  update(b) {

    b.data.update(b.x,b.y)
    Time.run(10, () => {
          
    if (b.timer.get(0, (5 + b.fout() * 2) * 1)) {
      let waweS = Mathf.sin(Time.time, 10, 10)
      let wawer = Mathf.sin(Time.time, 10, 5)
      let B = Frag.create(b.owner, b.team, b.x, b.y, b.rotation() + 15 + waweS, 0.5);
      let B2 = Frag.create(b.owner, b.team, b.x, b.y, b.rotation() - 15 + waweS, 0.5);
      b.vel.setAngle(b.rotation() + wawer);
      SoundH.Star_swin.at(b)
    };
  })
  },
  despawned(b) {
    this.despawnEffect.at(b.x, b.y, b.rotation(), this.hitColor);
    this.hitSound.at(b);

    Effect.shake(this.despawnShake, this.despawnShake, b);

    this.hit(b, b.x, b.y);
  for (let i = 0; i < 30; i++) {
    Frag.create(b.owner, b.team, b.x, b.y, b.rotation() + 12 * i, 0.5);
  }
  },
});




  const ChargerTurret = require("types/ChargerTurret")

  ChargerTurret("StarFury",shot2,30,5,4,charger,StarBling,SoundH.Star_wing,true,5,Stardelay,StarShot)
  
  