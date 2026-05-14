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

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('primary-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const expanded = navMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', expanded);
            menuToggle.textContent = expanded ? '✕' : '☰';
            menuToggle.title = expanded ? 'Cerrar menú' : 'Abrir menú';
        });

        document.querySelectorAll('#primary-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.textContent = '☰';
                    menuToggle.title = 'Abrir menú';
                }
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.querySelector('.form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            contactMessage.textContent = 'Enviando mensaje...';
            // Let the form submit normally
        });
    }

    document.documentElement.classList.add('js');
    const revealElements = document.querySelectorAll('.tarjeta');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach(element => revealObserver.observe(element));
});