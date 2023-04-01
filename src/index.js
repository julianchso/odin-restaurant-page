import './nav.js';
import './styles/main.scss';
import loadNav from './nav.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import clearContent from './functions/clear.js';

loadNav();
loadHome();

const eventListeners = (() => {
  const body = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  // homeBtn.addEventListener('click', home);
  // menuBtn.addEventListener('click', menu);
  // contactBtn.addEventListener('click', contact);

  document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'HOME') home();
    if (target === 'MENU') menu();
    if (target === 'CONTACT') contact();
  });

  function home() {
    clearContent();
    loadNav();
    loadHome();
  }

  function menu() {
    clearContent();
    loadNav();
    loadMenu();
  }

  function contact() {
    clearContent();
    loadNav();
    loadContact();
  }
})();
