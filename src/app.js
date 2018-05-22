const planetsData = require('./data/planets.js');
const PlanetMenu = require('./views/planet_menu.js');
const PlanetInfo = require('./views/planet_info.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

  //Get the PlanetMenu and create the listeners for each individual planet
  const planetItems = document.querySelectorAll('li');
  planetMenu = new PlanetMenu(planetItems);
  planetMenu.bindEvents();

});
