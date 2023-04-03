function loadNav() {
  const nav = document.createElement('nav');
  const navBtnContainer = document.createElement('div');

  // TODO: create DOM elements using loop
  // const btns = ['homeBtn', 'menuBtn', 'contactBtn'];

  // btns.forEach((btn) => {
  //   btn = document.createElement('button');
  //   btn.classList.add('navBtn');
  //   btn.classList.add('font-family');
  //   navBtnContainer.append(btn);
  // });

  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.classList.add('navBtn');
  menuBtn.classList.add('navBtn');
  contactBtn.classList.add('navBtn');

  homeBtn.classList.add('font-family');
  menuBtn.classList.add('font-family');
  contactBtn.classList.add('font-family');

  const body = document.querySelector('body');

  homeBtn.id = 'home';
  menuBtn.id = 'menu';
  contactBtn.id = 'contact';

  homeBtn.classList.add('active');
  navBtnContainer.classList.add('navBtnContainer');

  homeBtn.textContent = 'HOME';
  menuBtn.textContent = 'MENU';
  contactBtn.textContent = 'CONTACT';

  navBtnContainer.appendChild(homeBtn);
  navBtnContainer.appendChild(menuBtn);
  navBtnContainer.appendChild(contactBtn);

  nav.appendChild(navBtnContainer);

  body.insertAdjacentElement('afterbegin', nav);

  // body.appendChild(content);

  return body;
}

export { loadNav };
