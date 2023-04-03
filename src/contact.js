function loadContact() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');
  contactBtn.classList.add('active');
  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
}

export default loadContact;
