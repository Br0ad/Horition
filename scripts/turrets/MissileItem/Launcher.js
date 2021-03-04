let lib = require("Missil-lib");

const launch = new Effect(30,e => {
Angles.randLenVectors(e.id, 10, 2.4 + e.fin() * 40.0, e.rotation, 30, (x, y) => {
  Draw.color(Color.white, Color.gray, e.fin());
  Fill.square(e.x + x, e.y + y, 0.2 + e.fout() * 1.1, 45);
});
});
const Launcher = extendContent(ItemTurret,"Launcher",{
  init(){
    this.ammo(
    Vars.content.getByName(ContentType.item,"hori-standar-missil"),lib.standarMissil,
    Vars.content.getByName(ContentType.item,"hori-tugteno-missil"),lib.tugtenoMissil,
    Vars.content.getByName(ContentType.item,"hori-steel-missil"),lib.steelMissil,
    Vars.content.getByName(ContentType.item,"hori-selenita-missil"),lib.selenitaMissil,
    );
    this.super$init()
  }
});

Launcher.shootEffect = launch