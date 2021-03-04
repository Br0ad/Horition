try {
  const WindGenerator = require("types/WindGenerator");


  WindGenerator("wind-generator", 75.0, 4, 4, 2)
  WindGenerator("wind-generator-largest", 250.0, 7, 5, 3)
  WindGenerator("wind-generator-medium", 400.0, 10, 10, 3.5)

  print("finish creator winds")
} catch (err) {
  print("error in creator winds :" + err)
}