import Terminal from '../terminal.jpg';

function generateContact() {
  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('class', 'contact');

  const header = document.createElement('div');
  const instructions = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');

  header.setAttribute('class', 'header');
  instructions.setAttribute('class', 'instructions');
  image.setAttribute('src', Terminal);

  header.innerHTML = 'Order online';
  instructions.innerHTML = 'Now you can order online, in a few secconds a console will pop up and an Agent will contact you to take your order';

  imageContainer.appendChild(image);
  contactContainer.appendChild(header);
  contactContainer.appendChild(instructions);
  contactContainer.appendChild(imageContainer);

  return contactContainer;
}

export default generateContact;
