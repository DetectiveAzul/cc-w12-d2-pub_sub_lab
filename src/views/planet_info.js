const PubSub = require('../helpers/pub_sub.js');

const PlanetInfo = function(element) {
  this.element = element;
};

PlanetInfo.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:planet-ready', (event) => {
    this.render(event.detail);
  });
};

PlanetInfo.prototype.render = function (planet) {
  // for (let key in planet) {
  //   const planetLine = document.createElement('p')
  //   planetLine.textContent = `${key}: ${planet[key]}`;
  //   this.element.appendChild(planetLine);
  // }
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name}, has an orbit of '${planet.orbit}' and the day is ${planet.day} earth days. It has a surface area of ${planet.surfaceArea}, and a volume of ${planet.volume}. The gravity is ${planet.gravity} of earth's gravity. It has ${planet.moons}.`;
  const planetImage = document.createElement('img');
  planetImage.src = `${planet.image}`;
  this.element.innerHTML = '';
  this.element.appendChild(planetImage);
  this.element.appendChild(infoParagraph);
};





module.exports = PlanetInfo;
