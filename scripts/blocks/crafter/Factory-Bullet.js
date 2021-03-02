const multiLib = require("multi-lib");


//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "Factory-Bullet", [
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
        items: ["lead/5", "copper/5"],
        power: 5
      },
      output: {
        items: ["hori-standar-ammon/2"]
      },
      craftTime: 120
    },
    { //3
          input: {
            items: ["lead/5", "titanium/2","hori-tugteno/3"],
            power: 5
          },
          output: {
            items: ["hori-tugteno-ammon/2"]
          },
          craftTime: 160
        },
    { //4
      input: {
        items: ["hori-tugteno/5", "hori-steel/5","titanium/3"],
        power: 5
      },
      output: {
        items: ["hori-steel-ammon/1"]
      },
      craftTime: 180
    },
    { //5
      input: {
        items: ["hori-tugteno/5", "hori-selenita/5","thorium/6"],
        power: 5
      },
      output: {
        items: ["hori-selenita-ammon/1"]
      },
      craftTime: 200
    },
    { //6
      input: {
        items: ["hori-tugteno/5", "hori-steel/5","hori-selenita/2"],
        power: 5
      },
      output: {
        items: ["hori-graphene-ammon/1"]
      },
      craftTime: 250
    },
], {
    /*you can customize block here. ex) load()*/
  },
  /*this is Object constructor. This way is much better than literal way{a:123}
  you can replace this with {} if you don't want to modify entity*/
  function Extra() {
    this.draw=function(){
      
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-back"),this.x,this.y);
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-gear"), this.x + 3.3, this.y + 3.1, -this.totalProgress * 2 + 45)
      
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-gear"), this.x - 3, this.y + 3.1, this.totalProgress * 2)
      
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-gear"), this.x + 3.3, this.y - 3.1, this.totalProgress * 2)
      
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-gear"), this.x - 3, this.y - 3.1, -this.totalProgress * 2 + 45)
      
      
      Draw.rect(Core.atlas.find("hori-Factory-Bullet-top"), this.x, this.y);
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
