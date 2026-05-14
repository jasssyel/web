Portfolio Personal para Kevin Martinez Proyecto Programacion Web Full-Stack
Un sitio web personal responsivo y moderno que actúa como portafolio profesional, showcaseando proyectos, habilidades y experiencia educativa.
Características
Estructura Semántica
Implementación completa de HTML5 semántico con <header>, <nav>, <main>, <section>, <article> y <footer>
Múltiples tipos de listas (desordenada, ordenada y de definición)
Formulario de contacto funcional con validación
Diseño Responsivo
Flexbox: Menú de navegación adaptable con hamburguesa en móvil
CSS Grid: Galería de proyectos, tecnologías e información personal distribuidas dinámicamente
Media Queries: Cambio fluido de diseño de una columna (móvil) a múltiples columnas (escritorio)
Tema Oscuro/Claro
Alternador de tema que cambia dinámicamente todas las variables CSS
Persistencia de preferencia usando localStorage
Transiciones suaves entre temas
Validación de Formulario
Validación de campos vacíos en tiempo real
Verificación de formato de email con expresiones regulares
Mensajes de error/éxito animados en el DOM
Integración con cliente de correo (mailto:)
Tecnología y Estilo
Variables CSS: Paleta de colores centralizada (:root)
Google Fonts: Tipografía Poppins importada
Animaciones: Efectos de hover, fade-in, floating backgrounds
Sombras y Bordes: Profundidad visual con box-shadow y gradientes
Estructura del Proyecto
Pagina
├── index.html          # Estructura HTML semántica
├── script.js           # Lógica: tema, validación, animaciones
├── css/
│   └── styles.css      # Estilos con variables, grid, flexbox
└── img/
    ├── perfil.jpg.jpg  # Foto de perfil
    Tecnologías Utilizadas
*HTML5: Elementos semánticos
*CSS3: Grid, Flexbox, Variables, Media Queries, Animaciones
*JavaScript: Manipulación del DOM, localStorage, validación
    Secciones Principales
1. Header
Título con nombre y especialidad
Degradado de fondo con efecto flotante
2. Navegación
Lista desordenada (<ul>)
Enlaces a secciones (smooth scroll)
Botón alternador de tema (☀️/🌙)
Menú hamburguesa responsivo
3. Sobre Mí
Foto de perfil
Descripción personal
Mini recuadros con edad y ciudad
Enlace a GitHub
4. Tecnologías
Lista de definición (<dl>) con <dt> y <dd>
Grid responsivo: Frontend, Backend, Electrónica Digital
Efectos hover interactivos
5. Proyectos
Grid de tarjetas con CSS Grid
Descripción de proyectos
Enlaces a repositorios GitHub
Imágenes de referencia
6. Historial Educativo
Lista ordenada (<ol>) cronológica
Secundaria, Preparatoria, Universidad
7. Contacto
Formulario con validación
Campos: nombre, email, asunto, mensaje
Integración mailto: para abrir cliente de correo
Mensajes de feedback animados
8. Footer
Información de derechos de autor
Responsividad
*Móvil (<768px): Menú hamburguesa, una columna
*Tablet (768px-1024px): Dos columnas, menú expandido
*Escritorio (>1024px): Tres+ columnas, layout completo
Tema Oscuro/Claro
Haz clic en el botón de tema (☀️/🌙) en la navegación
Tu preferencia se guarda automáticamente
Todas las variables CSS se actualizan al instante
Validación del Formulario
El formulario valida:
 Campos no vacíos
 Formato válido de email (usuario@dominio.com)
 Mensajes de error claros
 Abre cliente de correo al enviar

Autor
Kevin Martinez - Estudiante de Ingeniería en Sistemas Electrónicos Inteligentes
