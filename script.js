// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_94fpd2q', 'template_z6mhx2e', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });

    this.reset();
});

// Navigation highlight on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add this new function for scroll animations
function handleScrollAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Add this to your existing window load event
window.addEventListener('load', function() {
    handleScrollAnimations();
});

function showProjects(type) {
    const miniProjects = document.getElementById('mini-projects');
    const majorProjects = document.getElementById('major-projects');

    if (type === 'mini') {
        miniProjects.style.display = 'block';
        majorProjects.style.display = 'none';
    } else {
        miniProjects.style.display = 'none';
        majorProjects.style.display = 'block';
    }
}

// Initialize with Major Projects visible
document.addEventListener('DOMContentLoaded', () => {
    showProjects('major');
}); 