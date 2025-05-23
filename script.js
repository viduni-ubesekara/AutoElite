// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden';
    
    // Create mobile menu content
    mobileMenu.innerHTML = `
        <div class="flex flex-col space-y-4">
            <a href="#home" class="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#vehicles" class="text-gray-700 hover:text-blue-600">Vehicles</a>
            <a href="#services" class="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);

    // Toggle mobile menu
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add section-fade class to sections and observe them
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-fade');
        observer.observe(section);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Newsletter subscription handling
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your newsletter subscription logic here
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
}); 