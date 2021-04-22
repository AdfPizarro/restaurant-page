import _ from 'lodash';
import './style.css';
import Land from './land.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

 element.classList.add('hello');
 const myIcon = new Image();

 myIcon.src = Land;


 element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
