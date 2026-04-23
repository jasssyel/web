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
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const asunto = document.getElementById('asunto').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !asunto || !mensaje) {
                contactMessage.textContent = 'Por favor completa todos los campos antes de enviar.';
                return;
            }

            const mailto = `mailto:kevin@example.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\n${mensaje}`)}`;
            contactMessage.textContent = 'Abriendo tu cliente de correo...';
            window.location.href = mailto;
        });
    }
});