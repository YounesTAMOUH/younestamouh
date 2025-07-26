// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Animation au défilement
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = '#2c3e50';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Animation des éléments
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.academic-item, .experience-item, .project-card, .skills-category, .contact-method');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les styles pour l'animation
    const initAnimation = function() {
        const elements = document.querySelectorAll('.academic-item, .experience-item, .project-card, .skills-category, .contact-method');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Appeler une première fois au chargement
    };
    
    initAnimation();
});