function generateLanding(Landing) {
  const landing_page = document.createElement('div');
  const landing_text = document.createElement('div');
  const landing_title = document.createElement('div');
  const landing_description = document.createElement('div');
  const image_container = document.createElement('div');
  const image = document.createElement('img');

  landing_page.setAttribute('class', 'landing-page');
  landing_text.setAttribute('class', 'landing-text');
  landing_title.setAttribute('class', 'lading-title');
  landing_description.setAttribute('class', 'landing-description');
  image_container.setAttribute('class', 'img-container');
  image.setAttribute('class', 'land-image');

  const landingImage = new Image();
  image.setAttribute('src', Landing);

  landing_description.innerHTML = '  Enjoy the chiken coreated by the best coders in the matrix, quality of every line of code in bite by bite';
  landing_title.innerHTML = 'The best chiken in the Matrix';

  landing_text.appendChild(landing_title);
  landing_text.appendChild(landing_description);

  image_container.appendChild(image);

  landing_page.appendChild(landing_text);
  landing_page.appendChild(image_container);

  return landing_page;
}

export { generateLanding };
