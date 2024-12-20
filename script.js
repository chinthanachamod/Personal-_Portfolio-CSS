// JavaScript for Responsive Navigation Menu
const menuIcon = document.getElementById('menu-icon');
const navItems = document.getElementById('nav-items');

// Add event listener to menu icon
menuIcon.addEventListener('click', () => {
    navItems.classList.toggle('show-menu');
});