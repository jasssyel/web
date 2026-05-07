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

    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.querySelector('.form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            contactMessage.textContent = 'Enviando mensaje...';
            // Let the form submit normally
        });
    }
});