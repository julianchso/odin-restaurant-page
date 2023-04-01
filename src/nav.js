function loadNav() {
  const nav = document.createElement('nav');
  const navBtnContainer = document.createElement('div');

  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  const body = document.querySelector('#content');
  const content = document.querySelector('#content');
  const background = document.createElement('div');

  homeBtn.id = 'home';
  menuBtn.id = 'menu';
  contactBtn.id = 'contact';

  homeBtn.classList.add('navBtn');
  menuBtn.classList.add('navBtn');
  contactBtn.classList.add('navBtn');

  homeBtn.classList.add('font-family');
  menuBtn.classList.add('font-family');
  contactBtn.classList.add('font-family');

  homeBtn.classList.add('active');
  navBtnContainer.classList.add('navBtnContainer');

  homeBtn.textContent = 'HOME';
  menuBtn.textContent = 'MENU';
  contactBtn.textContent = 'CONTACT';

  navBtnContainer.appendChild(homeBtn);
  navBtnContainer.appendChild(menuBtn);
  navBtnContainer.appendChild(contactBtn);

  nav.appendChild(navBtnContainer);

  body.appendChild(nav);

  background.classList.add('background');
  content.appendChild(background);

  return body;
}

export { loadNav };
