// Mobile menu functionality
const menuIcon = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu-container');
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    menuContainer.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menuContainer.classList.remove('active');
});


