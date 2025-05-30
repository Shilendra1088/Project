// Toggle navigation menu for mobile
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

// Show scroll-to-top button on scroll
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
document.querySelector('.scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
