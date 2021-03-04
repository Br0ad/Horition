const Fxbomb = new Effect(50, e => {
  Draw.color(Color.rgb(Mathf.random(150, 255), Mathf.random(150, 255), Mathf.random(150, 255)), Color.gray, e.fin());
  Lines.stroke(e.fout() * 2);
  Lines.circle(e.x,e.y,2 + e.finpow() * 10);
  Draw.color(Color.rgb(Mathf.random(150, 255), Mathf.random(150, 255), Mathf.random(150, 255)), Color.gray, e.fin());
  for(let i = 0; i < 4; i++){
    Drawf.tri(e.x,e.y,4,e.fout() * 50,i * 90 + Time.time * 6 );
    
  };
  Draw.color();
  for (let i = 0; i < 4; i++) {
    Drawf.tri(e.x, e.y, 2, e.fout() * 20, i * 90 + Time.time * 6);
  }
});


const despaw = new Effect(10, e => {
  Draw.color(Color.rgb(Mathf.random(150, 255), Mathf.random(150, 255), Mathf.random(150, 255)), Color.gray, e.fin());
  Lines.square(e.x, e.y, 0.1 + e.fout() * 30, 45);
});

const trail = new Effect(20, e => {
  Draw.color(Color.rgb(Mathf.random(150, 255), Mathf.random(150, 255), Mathf.random(150, 255)),Color.gray,e.fin());
  Lines.square(e.x, e.y, 0.1 + e.fin() * 2, 45);
});

const shot = extendContent(BasicBulletType,{
  draw(e){
     Draw.color(Color.rgb(Mathf.random(150, 255), Mathf.random(150, 255), Mathf.random(150, 255)));
     Fill.square(e.x, e.y, 0.1 + e.fin() * 3.8 + 1, 45);
     
     Draw.color(Color.white);
     Fill.square(e.x, e.y, 0.1 + e.fin() * 2 + 0.5, 45);
  },

  update(b){
    if(b.timer.get(0,(4 + b.fslope()* 2) * 1)){
      trail.at(b.x,b.y)
    }

  }
});

shot.damage = 35;
shot.speed = 3;
shot.lifetime = 60;
shot.knockback = 6;
shot.pierce = false;
shot.pierceBuilding = false;
shot.hitSize = 5;
shot.collides = true;
shot.collidesTiles = false;
shot.hitEffect = Fx.none;
shot.despawnEffect = Fxbomb;
shot.shootEffect = despaw;
shot.hitSound = Sounds.none;
shot.splashDamage = 30;
shot.splashDamageRadius = 40;

const frigge = extendContent(PowerTurret,"Frigge",{})

frigge.recoil = 1;
frigge.restitution = 0.015;
frigge.shootType = shot;