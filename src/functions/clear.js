function clearContent() {
  const content = document.querySelector('#content');
  const navbar = document.querySelector('nav');

  content.innerHTML = '';
  navbar.remove();

  return { content, navbar };
}

export default clearContent;
