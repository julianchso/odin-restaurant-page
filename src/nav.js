function loadNav() {
  const nav = document.createElement('nav');
  const navBtnContainer = document.createElement('div');

  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');

  const body = document.querySelector('#content');
  const content = document.querySelector('#content');
  const background = document.createElement('div');

  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';

  home.classList.add('navBtn');
  menu.classList.add('navBtn');
  contact.classList.add('navBtn');

  home.classList.add('font-family');
  menu.classList.add('font-family');
  contact.classList.add('font-family');

  home.classList.add('active');
  navBtnContainer.classList.add('navBtnContainer');

  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  contact.textContent = 'CONTACT';

  navBtnContainer.appendChild(home);
  navBtnContainer.appendChild(menu);
  navBtnContainer.appendChild(contact);

  nav.appendChild(navBtnContainer);

  body.appendChild(nav);

  background.classList.add('background');
  content.appendChild(background);

  return body;
}

export default loadNav;
