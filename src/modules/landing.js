const generateLanding = (Landing) => {
  const landingPage = document.createElement('div');
  const landingText = document.createElement('div');
  const landingTitle = document.createElement('div');
  const landingDescription = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');

  landingPage.setAttribute('class', 'landing-page');
  landingText.setAttribute('class', 'landing-text');
  landingTitle.setAttribute('class', 'lading-title');
  landingDescription.setAttribute('class', 'landing-description');
  imageContainer.setAttribute('class', 'img-container');
  image.setAttribute('class', 'land-image');

  image.setAttribute('src', Landing);

  landingDescription.innerHTML = '  Enjoy the chiken coreated by the best coders in the matrix, quality of every line of code in bite by bite';
  landingTitle.innerHTML = 'The best chiken in the Matrix';

  landingText.appendChild(landingTitle);
  landingText.appendChild(landingDescription);

  imageContainer.appendChild(image);

  landingPage.appendChild(landingText);
  landingPage.appendChild(imageContainer);

  return landingPage;
};

export default generateLanding;
