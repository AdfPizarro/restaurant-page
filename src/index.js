import './style.css';
import { generateLanding } from './modules/landing';
import { generateNav } from './modules/nav';
import { generateMenu } from './modules/menu';
import { generateLocations } from './modules/location';
import { generateContact } from './modules/contact';

import Landing from './land.png';

const container = document.getElementById('content');
const restaurant = {
  init() {
    drawNav();
    drawLanding();
    this.eventListener();
  },
  eventListener() {
    const home = document.getElementById('home');
    home.addEventListener('click', drawLanding, false);
    const menu = document.getElementById('menu');
    menu.addEventListener('click', drawMenu, false);
    const locations = document.getElementById('locations');
    locations.addEventListener('click', drawLocations, false);
    const contact = document.getElementById('contact');
    contact.addEventListener('click', drawContact, false);
  },
};

function clearContainer() {
  container.innerHTML = '';
}

function drawNav(activeIndex) {
  container.appendChild(generateNav(activeIndex));
  restaurant.eventListener();
}

function drawLanding() {
  clearContainer();
  drawNav();
  container.appendChild(generateLanding(Landing));
}

function drawMenu() {
  clearContainer();
  drawNav('menu');
  container.appendChild(generateMenu());
}

function drawLocations() {
  clearContainer();
  drawNav('locations');
  container.appendChild(generateLocations());
}

function drawContact() {
  clearContainer();
  drawNav('contact');
  container.appendChild(generateContact());
}

restaurant.init();
