import './nav.js';
import './styles/main.scss';
import loadNav from './nav.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import clearContent from './functions/clear.js';

// document.body.appendChild(loadNav());

function home() {
  clearContent();
  loadNav();
  loadHome();
}

home();

function eventListeners() {
  const body = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.addEventListener('click', home);
  menuBtn.addEventListener('click', menu);
  contactBtn.addEventListener('click', contact);

  return { body };
}

eventListeners();
