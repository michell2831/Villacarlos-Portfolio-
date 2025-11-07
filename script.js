// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Skills animation on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards animation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section (smoothed with requestAnimationFrame)
(() => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    if (!hero) return;

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const y = window.pageYOffset || 0;
                // Subtle parallax on container and differential depth on children
                hero.style.transform = `translateY(${y * -0.15}px)`;
                if (heroContent) heroContent.style.transform = `translateY(${y * -0.08}px)`;
                if (heroImage) heroImage.style.transform = `translateY(${y * -0.2}px)`;
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
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

// Download resume functionality
document.querySelector('a[href="resume.pdf"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a sample resume content (replace with actual resume)
    const resumeContent = `
Your Name
BSIT Student & Aspiring Developer

CONTACT INFORMATION
Email: your.email@example.com
Phone: +1 (555) 123-4567
Location: Your City, State
LinkedIn: linkedin.com/in/yourprofile
GitHub: github.com/yourusername

EDUCATION
Bachelor of Science in Information Technology
University Name | Expected Graduation: 2024
GPA: 3.8/4.0

SKILLS
Programming Languages: HTML5, CSS3, JavaScript, Python, Java
Frameworks & Tools: React, Node.js, Git, MySQL, Bootstrap
Other Skills: Responsive Design, REST APIs, System Analysis, Team Collaboration

PROJECTS
E-Commerce Website
- Full-stack e-commerce platform built with React and Node.js
- Features user authentication, product catalog, shopping cart, and payment integration
- Technologies: React, Node.js, MongoDB, Stripe

Task Management App
- Collaborative task management application with real-time updates
- Users can create, assign, and track tasks with deadline notifications
- Technologies: Vue.js, Firebase, Vuex, CSS3

Data Visualization Dashboard
- Interactive dashboard for visualizing business metrics and analytics
- Features multiple chart types, real-time data updates, and customizable widgets
- Technologies: JavaScript, D3.js, HTML5, CSS3

EXPERIENCE
Student Developer | University Name | 2023 - Present
- Developed and maintained web applications for university departments
- Collaborated with faculty on research projects involving data analysis
- Mentored junior students in programming fundamentals

Freelance Web Developer | Self-Employed | 2022 - Present
- Created responsive websites for small businesses and startups
- Implemented modern design principles and best practices
- Managed client relationships and project timelines

CERTIFICATIONS
- AWS Certified Cloud Practitioner
- Google IT Support Professional Certificate
- Microsoft Technology Associate: Database Fundamentals

LANGUAGES
English (Native), Spanish (Conversational)

INTERESTS
Open Source Development, Machine Learning, Cloud Computing, UI/UX Design
    `;
    
    // Create and download the resume
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Resume downloaded! (Note: This is a sample resume. Replace with your actual resume content.)');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .nav-link.active {
        color: #2563eb !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style); 