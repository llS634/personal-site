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

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navList = document.getElementById('navList');

    const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    if (burgerMenu && navList) {
        burgerMenu.innerHTML = openIcon;

        burgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            if (burgerMenu.classList.toggle('active')) {
                burgerMenu.innerHTML = closeIcon;
            } else {
                burgerMenu.innerHTML = openIcon;
            }
        });
    } else {
        console.error('Burger menu or nav list not found!');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.lang-click a');

    links.forEach(function (link) {
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('inactive');
            link.removeAttribute('href');
            link.style.pointerEvents = 'none';
        } else {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.href = this.getAttribute('href');
            });
        }
    });
});