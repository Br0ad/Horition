let lib = require("Missil-lib");

const launch = new Effect(10, e => {
  Angles.randLenVectors(e.id, 5, 2.4 + e.fin() * 50.0, e.rotation, 45, (x, y) => {
    Draw.color(Color.white, Color.gray, e.fin());
    Fill.square(e.x + x, e.y + y, 0.2 + e.fout() * 1.1, 45);
  });
});

const kratos = extendContent(ItemTurret, "kratos", {
  init() {


    this.ammo(
      Vars.content.getByName(ContentType.item,"hori-standar-missil"), lib.standarMissil,
      Vars.content.getByName(ContentType.item,"hori-tugteno-missil"), lib.tugtenoMissil,
      Vars.content.getByName(ContentType.item,"hori-steel-missil"), lib.steelMissil,
      Vars.content.getByName(ContentType.item,"hori-selenita-missil"), lib.selenitaMissil,
      Vars.content.getByName(ContentType.item,"hori-graphene-missil"), lib.grapheneMissil,
      Vars.content.getByName(ContentType.item,"hori-electric-missil"), lib.electricMissil,
      Vars.content.getByName(ContentType.item,"hori-fire-missil"), lib.fireMissil
    );
    this.super$init();
  }
});

kratos.shootEffect = launch