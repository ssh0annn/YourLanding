document.addEventListener('DOMContentLoaded', function() {
    // --- Script del Menú Hamburguesa (MODIFICADO) ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    function toggleMenu() {
        navMenu.classList.toggle('open');
    }

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú automáticamente al hacer clic en un enlace
            if (navMenu.classList.contains('open')) {
                toggleMenu(); 
            }
        });
    });
    // --- Fin Script del Menú Hamburguesa ---


    // --- Script de las Etapas de Lanzamiento (Tabs) (Se mantiene) ---
    const stageSteps = document.querySelectorAll('.stage-step');
    const contentItems = document.querySelectorAll('.content-item');

    // Inicialización: Asegurar que el primer paso esté activo al cargar
    if (stageSteps.length > 0) {
        stageSteps[0].classList.add('active');
    }
    if (contentItems.length > 0) {
        contentItems[0].classList.add('active');
    }

    stageSteps.forEach(step => {
        step.addEventListener('click', function() {
            // 1. Desactivar todos los pasos y contenidos
            stageSteps.forEach(s => s.classList.remove('active'));
            contentItems.forEach(c => c.classList.remove('active'));
            
            // 2. Activar el paso y el contenido asociado
            this.classList.add('active');
            
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // --- Script para FAQ (Acordeón) (Se mantiene) ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.toggle('active');
            
            // Abre o cierra la respuesta actual
            if (isActive) {
                answer.classList.add('open');
            } else {
                answer.classList.remove('open');
            }
        });
    });
});

// AÑADIDO: Script para Forzar el Scroll al Inicio en Carga (soluciona el problema de links compartidos)
    if (window.location.hash) {
        // Usamos setTimeout con un retraso mínimo (1ms) para que el script se ejecute
        // DESPUÉS de que el navegador complete su desplazamiento automático al hash.
        setTimeout(function() {
            window.scrollTo(0, 0);
            
            // Opcional: Limpiar el hash de la URL (para que el usuario no vea el #contacto)
            if (history.replaceState) {
                history.replaceState(null, document.title, window.location.pathname + window.location.search);
            }
        }, 1); 
    }
    // FIN DEL SCRIPT DE CORRECCIÓN DE SCROLL
    
    // --- Script del Menú Hamburguesa (MODIFICADO) ---
    const menuToggle = document.getElementById('menuToggle');

    // ... (El resto del contenido de tu script sigue aquí) ...

    