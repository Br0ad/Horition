//caught you dirty script thief how dare you steal pankiwi brrrrrrr
module.exports = (name, shot, chargeTime, chargeEffectsAmount, maxDelay, chargeEffect, chargeBeginEffect, chargeSound,Shotdelay,delayTime,delayEffect,EffectShot) => {
  
  const ChargerTurret = extendContent(PowerTurret, name, {
    shootType: shot
  });


  ChargerTurret.buildType = ent => {
    ent = extendContent(PowerTurret.PowerTurretBuild, ChargerTurret, {
      chargeTime: chargeTime,
      chargeEffects: chargeEffectsAmount,
      chargeMaxDelay: maxDelay,
      chargeEffect: chargeEffect,
      chargeBeginEffect: chargeBeginEffect,
      chargeSound: chargeSound,
      delayTime: delayTime,
      Shotdelay: Shotdelay,
      delayEffect: delayEffect,
      EffectShot: EffectShot,
      Shouter: false,
      Timer: false,
      effectCounter: 0,
      shoot(ammo) {
                const vec = new Vec2()

        this.useAmmo();

        vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
        this.chargeBeginEffect.at(this.x + vec.x, this.y + vec.y, this.rotation);
        this.chargeSound.at(this.x + vec.x, this.y + vec.y, 1);
        
        if (this.Shotdelay) {
          
          for (let i = 0; i < this.chargeEffects; i++) {
            Time.run(Mathf.random(this.chargeMaxDelay), () => {
              if (!this.isValid()) return;
              vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
              this.chargeEffect.at(this.x + vec.x, this.y + vec.y, this.rotation);
              this.effectCounter++
            });
          }
          this.Timer = true

          if (this.timer && this.effectCounter === this.chargeEffectsAmount) {
            vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
            this.delayEffect.at(this.x+ vec.x,this.y + vec.y,this.rotation)
            Time.run(this.delayTime, () => {
              this.Shouter = true;
              this.Timer = false
              this.effectCounter = 0
            })
          }
        } else {
          for (let i = 0; i < this.chargeEffects; i++) {
            Time.run(Mathf.random(this.chargeMaxDelay), () => {
              if (!this.isValid()) return;
              vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
              this.chargeEffect.at(this.x + vec.x, this.y + vec.y, this.rotation);
              
            });
          }
          this.Shouter = true;

          
        }
        
        Time.run(this.chargeTime, () => {

          if (!this.isValid()) return;
          vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
          this.recoil = ChargerTurret.recoilAmount;
          this.heat = 1;
          this.bullet(ammo, this.rotation + Mathf.range(ChargerTurret.inaccuracy));
          vec.trns(this.rotation, ChargerTurret.size * Vars.tilesize / 2);
          this.EffectShot.at(this.x + vec.x, this.y + vec.y, this.rotation);
          this.effects();
          this.Shouter = false;
        });
        
      },
      shouldTurn() {
        return !this.Shouter
      }
    })
    return ent
  }
  return ChargerTurret
}