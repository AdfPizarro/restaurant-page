import BBQ from '../bbq.png';
import CHIPOTLE from '../chipotle.png';
import HABANERO from '../mango-habanero.png';
import MANGO from '../mango.png';
import HONEY from '../honey-mustard.png';
import VEGGIES from '../veggies.png';

const menu = [];
class Dish {
  constructor(name, price, image, description) {
    this.name = name;
    this.price = price;
    switch (image) {
      case 'BBQ':
        this.image = BBQ;
        break;
      case 'CHIPOTLE':
        this.image = CHIPOTLE;
        break;
      case 'MANGO-HABANERO':
        this.image = HABANERO;
        break;
      case 'MANGO':
        this.image = MANGO;
        break;
      case 'HONEY':
        this.image = HONEY;
        break;
      case 'VEGGIES':
        this.image = VEGGIES;
        break;
      default:
        this.image = BBQ;
        break;
    }
    this.description = description;
  }
}

menu.push(new Dish('BBQ++', '$45.30', 'BBQ', 'Enjot the classic, with C++ sauce'));

menu.push(new Dish('Chipotle.js', '$48.30', 'CHIPOTLE', 'With our special spicy js sauce'));
menu.push(new Dish('Mango-habanero', '$44.30', 'HABANERO', 'The perfect sweet spicy bundle'));
menu.push(new Dish('Mango', '$44.30', 'MANGO', 'Simple and tasty (no dependencys required)'));
menu.push(new Dish('Honey Mustard', '$44.30', 'HONEY', 'Weird combination, some people like it'));
menu.push(new Dish('Veggies', '$12.30', 'VEGGIES', 'The prefect complement to bundle your meal'));

const generateMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu');

  for (let i = 0; i < menu.length; i += 1) {
    const dish = document.createElement('div');
    const name = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const price = document.createElement('div');
    const description = document.createElement('div');

    dish.setAttribute('class', 'menu-item');
    name.setAttribute('class', 'name');
    imageContainer.setAttribute('class', 'dish');
    price.setAttribute('class', 'price');
    description.setAttribute('class', 'description');

    image.setAttribute('src', menu[i].image);

    name.innerHTML = menu[i].name;
    price.innerHTML = menu[i].price;
    description.innerHTML = menu[i].description;

    imageContainer.appendChild(image);

    dish.appendChild(name);
    dish.appendChild(imageContainer);
    dish.appendChild(price);
    dish.appendChild(description);

    menuContainer.append(dish);
  }

  return menuContainer;
};

export default generateMenu;
