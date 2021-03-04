print("horition is mod loading")
// sorry meep need you code D:
global.pm = {};
const loadFile = (prev, array) => {
  var results = [];
  var names = [];

  var p = prev;

  for (var i = 0; i < array.length; i++) {
    var file = array[i];

    if (typeof(file) === "object") {
      p.push(file.name);
      var temp = loadFile(p, file.childs);

      results = results.concat(temp.res);
      names = names.concat(temp.fileNames);

      p.pop();
    } else {
      var temp = p.join("/") + "/" + file;

      results.push(temp);
      names.push(file);
    };
  };

  return {
    res: results,
    fileNames: names
  };
};

//Basically just folders and the stuff inside those folders.
//First load libraries, then items, then stuff that may or may not need those items.
const script = [
  {
    name: "crafter",
    childs: [
      {
        name: "Starting",
        childs: ["presCompres", "steelSmelter", "grafeno-Refiner", "Industrial-tungsten-compressor", "Selenita-Reformer"]
      },
      {
        name: "liquid",
        childs: ["oilRefiner", "oil-mixer"]
      },
      {
        name: "other",
        childs: ["meltion"]
      },
      {
        name: "multi",
        childs: ["Factory-Bullet", "Constructor-missile"]
      }
      ]
  },
  {
    name: "defense",
    childs: [
      {
        name: "pulsar",
        childs: ["Pulsar-generator", "Pulsar_matter"]
      }
      ]
  },
  {
    name: "Drill",
    childs: [
      {
        name: "Drill-laser",
        childs: ["ionic-drill"]
      }
    ]
  },
  {
    name: "power",
    childs: [
      {
        name: "winds",
        childs: ["winds"]
      },
      {
        name: "waterWind",
        childs: ["water-winds"]
},
      {
        name: "other",
        childs: ["powerProductor"]
}
      ]
  },
  {
    name: "turrets",
    childs: [
      {
        name: "Missile",
        childs: ["infuser","launchMisel"]
      },
      {
        name: "MissileItem",
        childs: ["Launcher","kratos"]
      },
      {
        name: "StarndsTurret",
        childs: ["trusher","sprayer","troncer"]
      },
      {
        name: "Spayers",
        childs: ["star","Tripo","moon"]
      },
      {
        name: "guns",
        childs: ["minigun","chainer"]
      },
      {
        name: "Fire",
        childs: ["flamer","claimer"]
      },
      {
        name: "laser",
        childs: ["onu","sword","StarShip"]
      },
      {
        name: "Stars",
        childs: ["StarFury","DremurChaos"]
      },
      {
        name: "Misc",
        childs: ["Frigge","divisor","bictfuse"]
      }
      ]
  },
  {
    name: "planets",
    childs: ["Starion","StarionGenerator"]
  }
];

const loadedScript = loadFile([], script);
for (var i = 0; i < loadedScript.res.length; i++) {
  var res = loadedScript.res[i];
  var name = loadedScript.fileNames[i];
  try {
    var content = require("hori/" + res);
    print("Creator finish:" + res)
    if (typeof(content) !== "undefined") {
      global.pm[name] = content;
    };
  } catch (e) {
    print("Creator error:" + e);
  };
};