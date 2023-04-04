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
  // content.appendChild(menuContainer);

  for (let i = 0; i < 3; i++) {
    const item = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');
    const price = document.createElement('span');

    item.classList.add('menu-item');
    image.classList.add('menu-item-image');
    name.classList.add('menu-item-name');
    price.classList.add('menu-item-price');

    item.id = `menu-item-${i}`;

    item.appendChild(image);
    item.appendChild(name);
    item.appendChild(price);

    menuContainer.appendChild(item);
    console.log(`loop: ${i}`);
  }
  content.appendChild(menuContainer);
}

export default loadMenu;
