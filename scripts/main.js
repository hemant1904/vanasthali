document.addEventListener('DOMContentLoaded', () => {
    // Component Loading
    const loadComponent = async (elementId, componentPath) => {
        const element = document.getElementById(elementId);
        if (element) {
            try {
                const response = await fetch(componentPath);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;

                    // Re-initialize mobile menu after navbar is loaded
                    if (elementId === 'navbar-placeholder') {
                        initMobileMenu();
                    }
                } else {
                    console.error(`Failed to load ${componentPath}`);
                }
            } catch (error) {
                console.error(`Error loading ${componentPath}:`, error);
            }
        }
    };

    // Load Navbar and Footer with cache busting
    const version = Date.now();
    loadComponent('navbar-placeholder', `components/navbar.html?v=${version}`);
    loadComponent('footer-placeholder', `components/footer.html?v=${version}`);

    // Mobile Menu Toggle Logic
    const initMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }

        // Highlight active page link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkPath = href.split('#')[0] || 'index.html';
                if (linkPath === currentPath) {
                    link.classList.add('active');
                }
            }
        });
    };

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 110;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});

// Slideshow Logic
let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
    if (!slides.length) return;
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

if (slides.length) {
    setInterval(showNextSlide, 4000); // change every 4 sec
}