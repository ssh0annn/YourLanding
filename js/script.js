document.addEventListener('DOMContentLoaded', function() {
    // --- Script del Menú Hamburguesa ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    function toggleMenu() {
        navMenu.classList.toggle('open');
        menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    }

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu(); 
            }
        });
    });

    // --- Script de las Etapas de Lanzamiento (Tabs) ---
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
    
    // --- Script para FAQ (Acordeón) ---
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