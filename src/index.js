import _ from 'lodash';
import './style.css';
import {generateLanding} from './modules/landing.js';
import {generateNav} from './modules/nav.js';
import {generateMenu} from './modules/menu.js';

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
    locations.addEventListener('click', showLocations, false);
    const contact = document.getElementById('contact');
    contact.addEventListener('click', showContact, false);

  },
};


restaurant.init();

function clearContainer(){
  container.innerHTML="";
}

function drawNav(){
  container.appendChild(generateNav());
  restaurant.eventListener();
}

function drawLanding(){
  clearContainer()
  drawNav();
  container.appendChild(generateLanding(Landing));
}

function drawMenu(event){
  clearContainer()
  drawNav();
  container.appendChild(generateMenu());
}

function showLocations(event){
  console.log("Locations");
}

function showContact(event){
  console.log("Contact");
}
