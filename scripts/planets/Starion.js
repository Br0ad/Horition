

Events.on(ClientLoadEvent, () => {
    const Starion = new Planet("Starion", Planets.sun, 1, 1);
    Starion.generator = new SerpuloPlanetGenerator();
    Starion.mesh = new SunMesh(
      Starion, 7,
      1, 0.7, 1.8, 0.7,1,
      2.9,
      
    //detalles,none,none,none,none,none,brillo
      Color.valueOf("683700FF"),
      Color.valueOf("782100FF"),
      Color.valueOf("A32E00FF"),
      Color.valueOf("A32E00FF"),
      Color.valueOf("541800FF"),
      Color.valueOf("722000FF")
    );
    Starion.orbitRadius = 6;
    Starion.orbitTime = 30;
    Starion.rotateTime = 20;
    Starion.bloom = true;
    Starion.radius = 2;
    Starion.accessible = false;
    Starion.hasAtmosphere = true;
    Starion.atmosphereColor = Color.valueOf("80ff00");
    Starion.atmosphereRadIn = 0.02;
    Starion.atmosphereRadOut = 0.01;
    Starion.localizedName = "Starion";
}); 
