const PubSub = require('../helpers/pub_sub.js');

const PlanetMenu = function(element) {
  this.element = element
};

PlanetMenu.prototype.bindEvents = function () {
  for (planetItem of this.element) {
    planetItem.addEventListener('click', function(event) {
      PubSub.publish('PlanetMenu:click', this.attributes.id);
    });
  }
};
module.exports = PlanetMenu;
