// Navigation Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navbar.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navbar.classList.remove('active');
            });
        });
    }

    // Set active link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check for active page
        if (currentPath.includes(href.replace('./', '').replace('../', ''))) {
            link.classList.add('active');
        }
    });
});

// Handle page transitions with fade effect
document.addEventListener('DOMContentLoaded', function() {
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
});
