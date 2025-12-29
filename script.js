// Portfolio Étudiant - Script JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Fermer le menu mobile en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        });
    });

    // Animation au défilement (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const fadeElements = document.querySelectorAll('.timeline-item, .certification-card');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Bouton retour en haut
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animation des boutons CTA
    const ctaButtons = document.querySelectorAll('.cta-button, .contact-button');

    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const x = e.pageX - button.getBoundingClientRect().left;
            const y = e.pageY - button.getBoundingClientRect().top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Effet de parallaxe sur la section hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (hero && heroContent) {
            heroContent.style.transform = translateY($ { scrolled * 0.05 }
                px);
        }
    });

    // Animation des éléments de timeline au survol
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const marker = this.querySelector('.marker-inner');
            if (marker) {
                marker.style.transform = 'scale(1.5)';
                marker.style.boxShadow = '0 0 10px var(--accent-blue)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const marker = this.querySelector('.marker-inner');
            if (marker) {
                marker.style.transform = 'scale(1)';
                marker.style.boxShadow = 'none';
            }
        });
    });

    // Animation des cartes de certification
    const certificationCards = document.querySelectorAll('.certification-card');

    certificationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.certification-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.certification-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Ajout de style pour l'effet ripple
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialisation
    console.log('Portfolio étudiant chargé avec succès');
});