let lib = require("ammon-lib");
const trusher = extendContent(ItemTurret, "Trusher", {
  init() {


    this.ammo(
      Vars.content.getByName(ContentType.item,"hori-standar-ammon"),lib.standarAmmon,
      Vars.content.getByName(ContentType.item,"hori-tugteno-ammon"), lib.tugtenoAmmon,
      Vars.content.getByName(ContentType.item,"hori-steel-ammon"), lib.steelAmmon,
    );
    this.super$init();
  }
});