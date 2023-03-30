import clearContent from './functions/clear.js';

function loadHome() {
  const content = document.querySelector('#content');
  const background = document.createElement('div');
  background.classList.add('background');
  content.appendChild(background);
}

export default loadHome;
