document.addEventListener("DOMContentLoaded", function() {
    // Obtener el tema guardado o usar el tema del sistema
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggleBtn = document.getElementById('toggle-theme');

    // Aplicar el tema guardado al cargar la página
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙';
    }

    // Agregar event listener al botón de toggle
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Actualizar el ícono del botón
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Hamburger Menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav .nav-menu');
    const navLinks = document.querySelectorAll('nav .nav-menu a');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú cuando se hace click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.querySelector('.form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            contactMessage.textContent = 'Enviando mensaje...';
            
        });
    }
    // ANIMACIONES AL HACER SCROLL

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show-section");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((el)=>{
    el.classList.add("hidden-section");
    observer.observe(el);
});
});