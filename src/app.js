const planetsData = require('./data/planets.js');
const Planets = require('./data/planets.js');
const PlanetMenu = require('./views/planet_menu.js');
const PlanetInfo = require('./views/planet_info.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  //Get the planet class containing all the planets

  //Get the PlanetMenu and create the listeners for each individual planet
  const planetItems = document.querySelectorAll('li');
  planetMenu = new PlanetMenu(planetItems);
  planetMenu.bindEvents();

  //Get the Planets to listen
  const planets = new Planets(planetsData);
  planets.bindEvents();

  //Get the planetInfo section to listen
  const planetInfoSection = document.querySelector('.planet-details');
  const planetInfo = new PlanetInfo(planetInfoSection);
  planetInfo.bindEvents();


});
