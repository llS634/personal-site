document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
        if (link.dataset.page === currentPath) {
            link.classList.add('disabled-link');
            link.removeAttribute('target');
        } else {
            link.addEventListener('click', function (event) {
                if (this.target === '_blank') return;
                event.preventDefault();
                window.location.href = this.getAttribute('href');
            });
        }
    });
});

document.getElementById('menuLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('menu').classList.toggle('open');
});

document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const menu = document.querySelector('.menu');
      menu.classList.toggle('show');
    });
  });

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuLink = document.getElementById('menuLink');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuLink = menuLink.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuLink) {
        menu.classList.remove('open');
        menu.classList.remove('show');
    }
});