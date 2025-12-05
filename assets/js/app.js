// ============================================
// NEUROSENSE KIT - INTERACTIVIDAD AVANZADA
// ============================================

console.log("🧠 NeuroSense Kit - Website listo. Todos los sistemas activos.");

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de animación al pasar el mouse sobre tarjetas
const cards = document.querySelectorAll('.rounded-xl');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Contador de elementos (para estadísticas)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observador de elementos en viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__fadeInUp');
        }
    });
}, {
    threshold: 0.1
});

// Observar todas las tarjetas
document.querySelectorAll('.rounded-xl').forEach(el => {
    observer.observe(el);
});

// Efecto de scroll en header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.classList.add('scrolled');
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Efecto de hover mejorado en botones
const buttons = document.querySelectorAll('a[class*="bg-gradient"]');
buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('click', function(e) {
        // Efecto de ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
    });
});

// Función para validación de formulario (preparado para futuro cuestionario)
function validateForm(formData) {
    const errors = [];
    
    Object.keys(formData).forEach(key => {
        if (!formData[key] || formData[key].trim() === '') {
            errors.push(`${key} es requerido`);
        }
    });
    
    return errors;
}

// Log de visitantes únicos (para analytics)
if (!localStorage.getItem('neurosensekit_visited')) {
    localStorage.setItem('neurosensekit_visited', 'true');
    localStorage.setItem('visit_date', new Date().toISOString());
    console.log('Primer visitante registrado');
}

// Método para reproducir animación de entrada en elementos específicos
function triggerElementAnimation(selector, animationName = 'fadeInUp') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.classList.remove('animate__animated', `animate__${animationName}`);
        // Trigger reflow para reiniciar la animación
        void el.offsetWidth;
        el.classList.add('animate__animated', `animate__${animationName}`);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Aplicación lista');
    
    // Verificar si el navegador soporta Intersection Observer
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver no soportado');
    }
});