import clearContent from './functions/clear.js';

function loadHome() {
  const header = document.createElement('h1');

  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
}

export default loadHome;
