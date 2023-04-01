import clearContent from './functions/clear.js';

function loadMenu() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  menuBtn.classList.add('active');
  homeBtn.classList.remove('active');
  contactBtn.classList.remove('active');
}

export default loadMenu;
