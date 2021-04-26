const locations = [];
class Location {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}

locations.push(new Location('Boneless Ny', '232 West 29th Street, 10001-5201, Nueva York, EE. UU.', '812-855-328'));
locations.push(new Location('Boneless Columbus', '80 Columbus Circle At 60th Street, 10023, Nueva York, EE. UU.', '812-428-511'));
locations.push(new Location('Boneless Madison', 'Madison Avenue at 77th street, 10075, Nueva York, EE. UU.', '812-855-521'));

function generateLocations() {
  const locationsContainer = document.createElement('div');
  locationsContainer.setAttribute('class', 'locations');

  for (let i = 0; i < locations.length; i += 1) {
    const location = document.createElement('div');
    const name = document.createElement('div');
    const address = document.createElement('div');
    const phone = document.createElement('div');

    location.setAttribute('class', 'location');
    name.setAttribute('class', 'name');
    address.setAttribute('class', 'address');
    phone.setAttribute('class', 'phone');

    name.innerHTML = locations[i].name;
    address.innerHTML = locations[i].address;
    phone.innerHTML = locations[i].phone;

    location.appendChild(name);
    location.appendChild(address);
    location.appendChild(phone);

    locationsContainer.append(location);
  }

  return locationsContainer;
}

export default generateLocations;
