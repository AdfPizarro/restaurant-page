
function generateNav(){
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

  return nav;
}


export  {generateNav};
