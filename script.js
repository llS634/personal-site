document.addEventListener('DOMContentLoaded', function () {
    var currentUrl = window.location.href;
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
        if (currentUrl.includes(link.dataset.page)) {
            link.classList.add('disabled-link');
            link.removeAttribute('target');
        } else {
            link.addEventListener('click', function(event) {
                if (this.target === '_blank') {
                    return;
                }
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