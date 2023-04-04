import clearContent from './functions/clear.js';

function loadHome() {
  const main = document.createElement('main');
  const header = document.createElement('h1');
  const subtext = document.createElement('p');

  const content = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');

  header.innerText = 'Welcome';
  header.classList.add = 'main-font';

  content.appendChild(main);
  main.appendChild(header);
}

export default loadHome;
