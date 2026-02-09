document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.href.includes('#') || link.target === '_blank') return;
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location = link.href;
      }, 400);
    });
});