import './style.css';
import generateLanding from './modules/landing';
import generateNav from './modules/nav';
import generateMenu from './modules/menu';
import generateLocations from './modules/location';
import generateContact from './modules/contact';

import Landing from './land.png';

const container = document.getElementById('content');

const restaurant = {
  init() {
    this.drawLanding();
    this.eventListener();
  },
  eventListener() {
    const home = document.getElementById('home');
    home.addEventListener('click', restaurant.drawLanding, false);
    const menu = document.getElementById('menu');
    menu.addEventListener('click', restaurant.drawMenu, false);
    const locations = document.getElementById('locations');
    locations.addEventListener('click', restaurant.drawLocations, false);
    const contact = document.getElementById('contact');
    contact.addEventListener('click', restaurant.drawContact, false);
  },
  drawNav(activeIndex) {
    container.appendChild(generateNav(activeIndex));
    restaurant.eventListener();
  },
  drawLanding() {
    container.innerHTML = '';
    restaurant.drawNav();
    container.appendChild(generateLanding(Landing));
  },
  drawMenu() {
    container.innerHTML = '';
    restaurant.drawNav('menu');
    container.appendChild(generateMenu());
  },
  drawLocations() {
    container.innerHTML = '';
    restaurant.drawNav('locations');
    container.appendChild(generateLocations());
  },
  drawContact() {
    container.innerHTML = '';
    restaurant.drawNav('contact');
    container.appendChild(generateContact());
  },
};

restaurant.init();
