// ========================================
// Smooth Scroll Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav-container').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Staggered animation for cards
document.querySelectorAll('.diff-card, .module-card, .tech-item, .qs-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cardObserver.observe(card);
});

// ========================================
// Animated Statistics Counter
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            const target = parseFloat(statValue.getAttribute('data-target'));

            if (statValue.textContent === '0') {
                animateCounter(statValue, target);
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => statsObserver.observe(card));

// ========================================
// Dashboard Sidebar Navigation
// ========================================
const sidebarItems = document.querySelectorAll('.sidebar-item');
const workspacePages = document.querySelectorAll('.workspace-page');

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const pageName = item.getAttribute('data-page');

        // Update sidebar active state
        sidebarItems.forEach(si => si.classList.remove('active'));
        item.classList.add('active');

        // Show corresponding workspace page
        workspacePages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById('page-' + pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const navHeight = document.querySelector('.nav-container').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
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

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 11, 13, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 11, 13, 0.8)';
    }
});

// ========================================
// Parallax Effect for Hero Background
// ========================================
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Chart Bar Animation
// ========================================
const chartBars = document.querySelectorAll('.chart-bar');
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.chart-bar');
            bars.forEach((bar, i) => {
                const height = bar.style.height;
                bar.style.height = '0';
                setTimeout(() => {
                    bar.style.height = height;
                }, i * 100);
            });
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.chart-bars').forEach(container => {
    chartObserver.observe(container);
});

// ========================================
// Glossary Modal (Tag Click)
// ========================================
const glossaryModal = document.getElementById('glossaryModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalBody = document.getElementById('modalBody');

if (modalClose) {
    modalClose.addEventListener('click', () => {
        glossaryModal.classList.remove('active');
    });
}

if (glossaryModal) {
    glossaryModal.addEventListener('click', (e) => {
        if (e.target === glossaryModal) {
            glossaryModal.classList.remove('active');
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && glossaryModal && glossaryModal.classList.contains('active')) {
        glossaryModal.classList.remove('active');
    }
});

// Tag click handler
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const term = tag.textContent.trim();
        if (typeof glossaryData !== 'undefined' && glossaryData[term]) {
            const data = glossaryData[term];
            modalIcon.textContent = data.icon || '\u{1F4D6}';
            modalTitle.textContent = term;
            modalBody.innerHTML = data.content;
            glossaryModal.classList.add('active');
        }
    });
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c\u{1F50D} TruthLens DeepFake Detection System', 'font-size: 20px; font-weight: bold; color: #4f91ff;');
console.log('%cPowered by LangGraph + CrewAI + AutoGen + Ollama', 'font-size: 14px; color: #8b5cf6;');
console.log('%cVersion 2.8.0', 'font-size: 12px; color: #10b981;');
