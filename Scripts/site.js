(function () {
  const button = document.createElement('button');
  button.id = 'scrollTop';
  button.type = 'button';
  button.setAttribute('aria-label', 'Scroll to top');
  button.textContent = 'Top';
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function toggleScrollButton() {
    button.classList.toggle('show', window.scrollY > 420);
  }

  window.addEventListener('scroll', toggleScrollButton);
  toggleScrollButton();
})();
