const intro = document.getElementById('intro');
    const main = document.getElementById('main-content');
    const video = document.getElementById('intro-video');

    video.onended = () => {
        intro.classList.add('fade-out');
        setTimeout(() => {
        intro.style.display = 'none';
        main.style.display = 'block';
      }, 1000); // Matches fadeOut duration
    };


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