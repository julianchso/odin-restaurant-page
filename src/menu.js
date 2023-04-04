function loadMenu() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');
  const content = document.querySelector('#content');

  menuBtn.classList.add('active');
  homeBtn.classList.remove('active');
  contactBtn.classList.remove('active');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');

  menuContainer.appendChild(createMenuItem('asdf', 'steak', '$25.99'));
  menuContainer.appendChild(createMenuItem('asdf', 'fish', '$22.99'));
  menuContainer.appendChild(createMenuItem('asdf', 'salad', '$12.99'));

  content.appendChild(menuContainer);
}

function createMenuItem(imageSrc, name, price) {
  const foodGroup = document.createElement('div');
  foodGroup.classList.add('menu-item');

  const foodImage = document.createElement('img');
  foodImage.classList.add('menu-item-image');
  // imageSrc.src = `./assets/${imageSrc}`;

  const foodName = document.createElement('span');
  foodName.textContent = name;
  foodName.classList.add('menu-item-name');

  const foodPrice = document.createElement('span');
  foodPrice.textContent = price;
  foodPrice.classList.add('menu-item-price');

  foodGroup.appendChild(foodImage);
  foodGroup.appendChild(foodName);
  foodGroup.appendChild(foodPrice);

  console.log(foodGroup);

  return foodGroup;
}

export default loadMenu;
