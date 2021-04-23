import Terminal from '../terminal.jpg';

function generateContact() {
  const contact_container = document.createElement('div');
  contact_container.setAttribute('class', 'contact');

  const header = document.createElement('div');
  const instructions = document.createElement('div');
  const image_container = document.createElement('div');
  const image = document.createElement('img');

  header.setAttribute('class', 'header');
  instructions.setAttribute('class', 'instructions');
  image.setAttribute('src', Terminal);

  header.innerHTML = 'Order online';
  instructions.innerHTML = 'Now you can order online, in a few secconds a console will pop up and an Agent will contact you to take your order';

  image_container.appendChild(image);
  contact_container.appendChild(header);
  contact_container.appendChild(instructions);
  contact_container.appendChild(image_container);

  return contact_container;
}

export { generateContact };
