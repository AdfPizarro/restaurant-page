const generateNav = (activeIndex) => {
  const nav = document.createElement('nav');
  const navContent = document.createElement('div');
  const title = document.createElement('div');
  const icon = document.createElement('div');
  const navElements = document.createElement('div');
  const navList = document.createElement('ul');
  const navMenu = document.createElement('li');
  const navLocations = document.createElement('li');
  const navContact = document.createElement('li');

  nav.setAttribute('class', 'nav-bar');

  navContent.setAttribute('class', 'nav-content');
  title.setAttribute('class', 'title');
  icon.setAttribute('class', 'fas fa-drumstick-bite');
  navElements.setAttribute('class', 'nav-elements');

  title.setAttribute('id', 'home');
  navMenu.setAttribute('id', 'menu');

  switch (activeIndex) {
    case 'menu':
      navMenu.setAttribute('class', 'active');
      break;
    case 'locations':
      navLocations.setAttribute('class', 'active');
      break;
    case 'contact':
      navContact.setAttribute('class', 'active');
      break;
    default:
  }

  title.appendChild(icon);
  title.innerHTML += ' Boneles.js';

  navLocations.setAttribute('id', 'locations');
  navContact.setAttribute('id', 'contact');

  navMenu.innerHTML = 'Menu';
  navLocations.innerHTML = 'Locations';
  navContact.innerHTML = 'Contact';

  navList.appendChild(navMenu);
  navList.appendChild(navLocations);
  navList.appendChild(navContact);

  navElements.appendChild(navList);

  navContent.appendChild(title);
  navContent.appendChild(navElements);

  nav.appendChild(navContent);

  return nav;
};

export default generateNav;
