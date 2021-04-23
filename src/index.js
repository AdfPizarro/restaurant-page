import _ from 'lodash';
import './style.css';
import Landing from './land.jpg';

const container = document.getElementById('content');
const restaurant = {
  init() {
    //showHome();
    this.eventListener();
  },
  eventListener() {
    const home = document.getElementById('home');
    home.addEventListener('click', showHome, false);
    const menu = document.getElementById('menu');
    menu.addEventListener('click', showMenu, false);
    const locations = document.getElementById('locations');
    locations.addEventListener('click', showLocations, false);
    const contact = document.getElementById('contact');
    contact.addEventListener('click', showContact, false);

  },
};


restaurant.init();

function showHome(){
  console.log("Home");
  const nav=document.createElement('nav');
  const nav_content=document.createElement('div');
  const title=document.createElement('div');
  const icon=document.createElement('div');
  const nav_elements=document.createElement('div');
  const nav_list=document.createElement('ul');
  const nav_menu=document.createElement('li');
  const nav_locations=document.createElement('li');
  const nav_contact=document.createElement('li');

  nav.setAttribute('class', 'nav-bar');


  nav_content.setAttribute('class', 'nav-content');
  title.setAttribute('class', 'title');
  icon.setAttribute('class', 'fas fa-drumstick-bite');
  nav_elements.setAttribute('class', 'nav-elements');

  title.setAttribute('id', 'home');
  nav_menu.setAttribute('id', 'menu');


  title.appendChild(icon);
  title.innerHTML +=" Boneles.js";


  nav_locations.setAttribute('id', 'locations');
  nav_contact.setAttribute('id', 'contact');

  nav_menu.innerHTML="Menu";
  nav_locations.innerHTML="Locations";
  nav_contact.innerHTML="Contact";

  nav_list.appendChild(nav_menu);
  nav_list.appendChild(nav_locations);
  nav_list.appendChild(nav_contact);

  nav_elements.appendChild(nav_list);


  nav_content.appendChild(title);
  nav_content.appendChild(nav_elements);

  nav.appendChild(nav_content);

  container.appendChild(nav);

  //Landing page
  const landing_page=document.createElement('div');
  const landing_text=document.createElement('div');
  const landing_title=document.createElement('div');
  const landing_description=document.createElement('div');
  const image_container=document.createElement('div');
  const image=document.createElement('img');

  landing_page.setAttribute('class', 'landing-page');
  landing_text.setAttribute('class', 'landing-text');
  landing_title.setAttribute('class', 'lading-title');
  landing_description.setAttribute('class', 'landing-description');
  image_container.setAttribute('class', 'img-container');
  image.setAttribute('class', 'land-image');

  const landingImage=new Image();
  landingImage.src=Landing
  image.setAttribute('src', landingImage.src);

  landing_description.innerHTML="  Enjoy the chiken coreated by the best coders in the matrix, quality of every line of code in bite by bite";
  landing_title.innerHTML="The best chiken in the Matrix";


  landing_text.appendChild(landing_title);
  landing_text.appendChild(landing_description);

  image_container.appendChild(image);

  landing_page.appendChild(landing_text);
  landing_page.appendChild(image_container);

  container.appendChild(landing_page);

}

function showMenu(event){
  console.log("Menu");
}

function showLocations(event){
  console.log("Locations");
}

function showContact(event){
  console.log("Contact");
}
