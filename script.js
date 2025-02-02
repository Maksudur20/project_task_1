const menuBtn = document.querySelector('.menu-btn');
const navLink = document.querySelector('.nav-link');
menuBtn.addEventListener('click', () => {
    navLink.classList.toggle('mobile-menu');
});