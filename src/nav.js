import clearContent from './functions/clear.js';

function loadNav() {
  const nav = document.createElement('nav');

  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');

  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';

  home.classList.add('navBtn');
  menu.classList.add('navBtn');
  contact.classList.add('navBtn');

  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  contact.textContent = 'CONTACT';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

export default loadNav;
