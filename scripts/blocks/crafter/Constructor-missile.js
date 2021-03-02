const multiLib = require("multi-lib");


//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "Constructor-missile", [
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    { //2
      input: {
        items: ["lead/5", "copper/5","titanium/8"],
        power: 7
      },
      output: {
        items: ["hori-standar-missil/1"]
      },
      craftTime: 170
    },
    { //3
          input: {
            items: ["copper/10", "titanium/10","hori-tugteno/8"],
            power: 7
          },
          output: {
            items: ["hori-tugteno-missil/1"]
          },
          craftTime: 170
        },
    { //4
      input: {
        items: ["lead/10", "hori-steel/8","titanium/12"],
        power: 7
      },
      output: {
        items: ["hori-steel-missil/1"]
      },
      craftTime: 170
    },
    { //5
      input: {
        items: ["titanium/15", "hori-selenita/10","copper/10"],
        power: 7
      },
      output: {
        items: ["hori-selenita-missil/1"]
      },
      craftTime: 170
    },
    { //6
      input: {
        items: ["hori-Graphene/10", "thorium/15","titanium/12"],
        power: 7
      },
      output: {
        items: ["hori-graphene-missil/1"]
      },
      craftTime: 170
    },
        { //6
          input: {
            items: ["hori-tugteno/10", "pyratite/10", "hori-steel/12"],
            power: 8
          },
          output: {
            items: ["hori-fire-missil/1"]
          },
          craftTime: 170
        },
          { //6
            input: {
              items: ["hori-selenita/10", "copper/10", "silicon/12"],
              power: 16
            },
            output: {
              items: ["hori-electric-missil/1"]
            },
            craftTime: 170
          },
], {
    /*you can customize block here. ex) load()*/
  },
  /*this is Object constructor. This way is much better than literal way{a:123}
  you can replace this with {} if you don't want to modify entity*/
  function Extra() {
    this.draw=function(){
      let region = Core.atlas.find("hori-Constructor-missile-back")
Draw.rect(region, this.x, this.y);

let bullet = Core.atlas.find("hori-Constructor-missile-missil")
Draw.rect(bullet, this.x, this.y)

let bulletT = Core.atlas.find("hori-Constructor-missile-missil-top")
Draw.color(Pal.accent)
Draw.alpha(0 + Mathf.sin(this.totalProgress, 30, 0.8))

Draw.rect(bulletT, this.x, this.y)
Draw.color()
Draw.alpha(1)
let leg = 2.5

let lig = -0.5

let log = -2.5

let lug = 0.5

let arm = Core.atlas.find("hori-arm")
let arm2 = Core.atlas.find("hori-arm2")
let armg = Core.atlas.find("hori-arm-pick");

let armb = Core.atlas.find("hori-arm-get");

let rot = Mathf.sin(this.totalProgress, 30, 20);

let rotg = Mathf.cos(this.totalProgress, 30, 3);

let rotd = Mathf.cos(this.totalProgress, 30, 2);
let rotf = Mathf.cos(this.totalProgress, 30, 5);

let rott = Mathf.sin(this.totalProgress, 40, 20);

let rottg = Mathf.cos(this.totalProgress, 40, 3);

let rottd = Mathf.cos(this.totalProgress, 40, 2);
let rottf = Mathf.cos(this.totalProgress, 40, 5);
//1 arm
let  z = Draw.z();
Draw.z(Layer.turret);
Draw.rect(arm, this.x + 9 + leg, this.y + 5 + lig, -20 - rottf)
Draw.rect(arm2, this.x + 6 + leg, this.y + lig + 11 - rottd, 60 - rott)

Draw.rect(armb, this.x + 2 + leg - rottd, this.y + lig + 10 - rottg, 160 - rott)
//2 arm
Draw.rect(arm, this.x - 9 + log, this.y + 5 + lug, 20 + rotf)
Draw.rect(arm2, this.x - 7 + log, this.y + lug + 11 - rotd, -40 + rot)

Draw.rect(armg, this.x - 2 + log, this.y + lug + 12 - rotg, -130 + rot)
Draw.z(z)
    };
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
  });
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
