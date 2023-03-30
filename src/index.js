import './nav.js';
import './styles/main.scss';
import loadNav from './nav.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import clearContent from './functions/clear.js';

document.body.appendChild(loadNav());
loadHome();

function init() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}

init();
