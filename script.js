document.addEventListener('DOMContentLoaded', function () {
    var currentUrl = window.location.href;
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
        if (currentUrl.includes(link.dataset.page)) {
            link.classList.add('disabled-link');
            link.removeAttribute('target');
        } else {
            // Add event listener for navigation without opening a new tab
            link.addEventListener('click', function(event) {
                event.preventDefault();  // Prevent the default link behavior
                window.location.href = this.getAttribute('href');  // Navigate to the specified URL
            });
        }
    });
});

document.getElementById('menuLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('menu').classList.toggle('open'); // Toggle the 'open' class
});