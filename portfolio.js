// ========================================
// PORTFOLIO JAVASCRIPT - MINA DIAA
// Interactivity & Animations
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initActiveNavLink();
    initTypingEffect();
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section, .timeline-item, .project-card, .skill-category, .cert-card');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };

    // Add CSS for reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .section, .timeline-item, .project-card, .skill-category, .cert-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .section.revealed, .timeline-item.revealed, .project-card.revealed, 
        .skill-category.revealed, .cert-card.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        .timeline-item:nth-child(1) { transition-delay: 0.1s; }
        .timeline-item:nth-child(2) { transition-delay: 0.2s; }
        .timeline-item:nth-child(3) { transition-delay: 0.3s; }
        .timeline-item:nth-child(4) { transition-delay: 0.4s; }
        .cert-card:nth-child(1) { transition-delay: 0.1s; }
        .cert-card:nth-child(2) { transition-delay: 0.2s; }
        .cert-card:nth-child(3) { transition-delay: 0.3s; }
        .cert-card:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ========================================
// ACTIVE NAV LINK TRACKING
// ========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// TYPING EFFECT FOR CODE WINDOW
// ========================================
function initTypingEffect() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        // Cursor is already animated via CSS, but we can add more effects
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight - 50) {
                bar.style.width = bar.style.getPropertyValue('--progress');
            }
        });
    };

    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
}

// Initialize skill bars
document.addEventListener('DOMContentLoaded', initSkillBars);

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold;');
console.log('%c💼 Looking to hire? Contact me at minadiaa65@gmail.com', 'font-size: 14px;');
console.log('%c🔐 Security enthusiast | 💻 Software Developer', 'font-size: 12px; color: #6366f1;');
