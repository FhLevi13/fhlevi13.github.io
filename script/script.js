// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar Mobile Toggle Logic
const toggleBtn = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-sticky');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const navLinks = navbarMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(!navbarMenu.classList.contains('hidden')) {
            navbarMenu.classList.add('hidden');
        }
    });
});