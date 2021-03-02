const SoundH = require("SoundH")


const charger = new Effect(20, e => {

  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));

  Angles.randLenVectors(e.id, 5, e.fout() * 40, e.rotation, 360, (x, y) => {

    for (var i = 0; i < 5; i++) {
      Drawf.tri(e.x + x, e.y + y, e.fin() * 5, e.fin() * 10, i * 72 + Time.time * 2);
    }

  })
})

const StarBling = new Effect(30, e => {

  for (var i = 0; i < 5; i++) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i));
    Drawf.tri(e.x, e.y, e.fin() * 5, e.fin() * 7, i * 72 + Time.time * 2);
  }
})

const Stardelay = new Effect(10, e => {
  for (var i = 0; i < 5; i++) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i));
    Drawf.tri(e.x, e.y, e.fin() * 5, fout * 7, i * 72 + Time.time * 2);
  }
  Lines.circle(e.x, e.y, e.fout() * 10)
})

const StarShot = new Effect(10, e => {
  Draw.color(Color.pink.cpy().shiftHue(Time.time * 2));


  Drawf.tri(e.x, e.y, 20 * e.fout(), 50, e.rotation + 90);
  Drawf.tri(e.x, e.y, 20 * e.fout(), 50, e.rotation - 90);
})


const FragDespaw2 = new Effect(10, e => {
  Draw.color(Color.pink, Pal.accent, Color.cyan, e.fin());
  Lines.circle(e.x, e.y, 0.1 + e.fout() * 10);
});

const Frag2 = extendContent(BasicBulletType, {
  damage: 50,
  speed: 3,
  lifetime: 80,
  knockback: 0,
  pierce: true,
  pierceBuilding: false,
  hitSize: 5,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: FragDespaw2,
  shootEffect: Fx.none,
  hitSound: Sounds.none,
  draw(e) {
    Draw.color(Color.pink.cpy().shiftHue(Time.time * 5));

    for (let i = 0; i < 5; i++) {
      Drawf.tri(e.x, e.y, 7, e.fslope() + 2 * 2, i * 72 + Time.time * 2);
    }
  }
});

const despaw3 = new Effect(30, e => {
  Draw.color(Color.pink, Pal.accent, Color.cyan, e.fin())
  Lines.circle(e.x, e.y, 0.1 + e.fout() * 30);


  for (let i = 0; i < 6; i++) {
    Drawf.tri(e.x, e.y, e.fout() * 8, e.fout() * 30, i * 72 + Time.time * 5);

  };
});

const Star = extendContent(BasicBulletType, {
  damage: 220,
  speed: 0,
  lifetime: 250,
  knockback: 0,
  pierce: true,
  pierceBuilding: false,
  hitSize: 5,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: FragDespaw2,
  shootEffect: Fx.none,
  hitSound: SoundH.Star_spin,
  draw(e) {


    for (let i = 0; i < 6; i++) {
      Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i * 20));
      Drawf.tri(e.x, e.y, 9, 15 + e.fslope() * 30, i * 72 + Time.time * 2);
    };



    Draw.color();
    for (let i = 0; i < 6; i++) {
      Drawf.tri(e.x, e.y, 7, 10 + e.fslope() * 15, i * 72 + Time.time * 2);
    }

    Damage.damage(e.team, e.x, e.y, 10 + e.fslope() * 30, this.damage, true, true);
  },
  update(b) {
    if (b.timer.get(0, (2 + b.fslope() * 2) * 1)) {
      let timer = 0
      timer += 25
      b.vel.setAngle(b.rotation() + timer);
    }
  },
  despawned(b) {
    this.despawnEffect.at(b.x, b.y, b.rotation(), this.hitColor);
    this.hitSound.at(b);


    Effect.shake(this.despawnShake, this.despawnShake, b);

    this.hit(b, b.x, b.y);

    for (let i = 0; i < 30; i++) {
      Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() + 12 * i, 0.5);
    }
  },
});

const Flower = extendContent(BasicBulletType, {
  damage: 170,
  speed: 1,
  lifetime: 140,
  knockback: 0,
  pierce: true,
  pierceBuilding: false,
  hitSize: 5,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: FragDespaw2,
  shootEffect: Fx.none,
  hitSound: SoundH.Star_pix,
  init(b) {
    if(!b) return
  b.data = new Trail(b.fout() * 40)
  },
  draw(e) {
    e.data.draw(Color.white,e.fout() * 4)
  },
  update(b) {
   b.data.update(b.x,b.y)
    Time.run(10,() => {
      if (b.timer.get(0, (5 + b.fslope() * 2) * 1)) {
        let waweb = Mathf.cos(Time.time, 30, 30)
        let inwawe = Mathf.sin(Time.time, 5, 5)
        Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() + 120 - waweb + inwawe, 0.1);
        Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() - 120 + waweb - inwawe, 0.1);
        let timer = 0
        timer += 25
        b.vel.setAngle(b.rotation() + timer);
        SoundH.Star_pix.at(b)
      }
})

  }
});


const shot3 = extendContent(BasicBulletType, {
  damage: 300,
  speed: 3,
  lifetime: 180,
  knockback: 6,
  pierce: false,
  pierceBuilding: false,
  hitSize: 20,
  collides: true,
  collidesTiles: false,
  hitEffect: Fx.none,
  despawnEffect: despaw3,
  shootEffect: despaw3,
  hitSound: SoundH.Star_wong,
  splashDamage: 10,
  splashDamageRadius: 40,
  init(b){
    if (!b) return
    b.data = new Trail(30)
  },
  draw(e) {
    
    for (let i = 0; i < 6; i++) {
      Draw.color(Color.pink.cpy().shiftHue(Time.time * 2 + i * 20));
      Drawf.tri(e.x, e.y, 9, 8 + e.fslope() * 20, i * 72 + Time.time * 2);

    };
    Lines.circle(e.x, e.y, 9 + e.fslope() * 22)


    Draw.color();
    for (let i = 0; i < 6; i++) {
      Drawf.tri(e.x, e.y, 7, 5 + e.fslope() * 20, i * 72 + Time.time * 2);
    }
    e.data.draw(Color.white,4)
  },

  update(b) {
    b.data.update(b.x,b.y)
    Time.run(20,() => {
      if (b.timer.get(0, (5 + b.fin() * 2) * 1)) {
        let wawe = Mathf.sin(Time.time, 20, 20)
        let waweb = Mathf.cos(Time.time, 30, 30)
        let waweS = Mathf.sin(Time.time, 10, 10)
      
        let B = Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() + 15 + waweS, 0.5);
        let B2 = Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() - 15 + waweS, 0.5);
      
        Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() + 120 - waweb, 0.2);
        Frag2.create(b.owner, b.team, b.x, b.y, b.rotation() - 120 + waweb, 0.2);
      
        SoundH.Star_pix.at(b)
      
      }
    })
  },
  hit(b, x, y) {
    this.hitEffect.at(b.x, b.y, b.rotation(), this.hitColor);
    this.hitSound.at(b);

    Effect.shake(this.hitShake, this.hitShake, b);


    for (let i = 0; i < 6; i++) {
      Flower.create(b.owner, b.team, b.x, b.y, b.rotation() + 72 * i, 5);
    }


    Star.create(b.owner, b.team, b.x, b.y, b.rotation(), 5);

  }
});



const ChargerTurret = require("types/ChargerTurret")

ChargerTurret("DremurChaos",shot3,30,5,4,charger,StarBling,SoundH.Star_wong,true,10,Stardelay,StarShot)