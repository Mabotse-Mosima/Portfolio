/*
 * Portfolio Website - JavaScript
 * Author: John Doe
 * Description: Interactive functionality for the portfolio website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initThemeToggle();
  initMobileMenu();
  initScrollAnimation();
  initContactForm();
  // Start animations
  animateSkillBars();
});

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const footerThemeToggle = document.getElementById('footer-theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme
  if (storedTheme === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !storedTheme)) {
    document.body.classList.add('dark-theme');
  }
  
  // Toggle theme function
  function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Add event listeners
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (footerThemeToggle) {
    footerThemeToggle.addEventListener('click', toggleTheme);
  }
}

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  // Add event listeners
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// Smooth Scrolling for Navigation
function initScrollAnimation() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .hero-buttons a, .footer-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply to hash links pointing to page sections
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Offset for fixed header
          const headerOffset = 70;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add active state to nav links based on scroll position
  window.addEventListener('scroll', highlightNavLink);
}

// Highlight the active navigation link based on scroll position
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let scrollPosition = window.scrollY + 100; // Add offset for header
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  // Only animate if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the width from the style attribute
          const width = entry.target.style.width;
          
          // Apply initial width of 0 then animate to the target width
          entry.target.style.width = '0';
          
          // Force a reflow to ensure the animation works
          void entry.target.offsetWidth;
          
          // Set the target width to trigger the animation
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe each skill bar
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    skillBars.forEach(bar => {
      bar.style.width = bar.style.width;
    });
  }
}

// Handle contact form submission
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.querySelector('.toast-message');
  const toastClose = document.querySelector('.toast-close');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = contactForm.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      
      btnText.classList.add('hidden');
      btnLoading.classList.remove('hidden');
      
      // Get form data
      const formData = new FormData(contactForm);
      const formDataObj = {};
      
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      
      // Simulate form submission with a timeout
      setTimeout(() => {
        // Reset loading state
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        
        // Show success message
        showToast('Your message has been sent successfully!', 'success');
        
        // Reset form
        contactForm.reset();
      }, 1500);
    });
  }
  
  // Toast notification functions
  function showToast(message, type = 'success') {
    if (toast && toastMessage) {
      toast.className = 'toast show ' + type;
      toastMessage.textContent = message;
      
      // Auto hide after 5 seconds
      setTimeout(() => {
        hideToast();
      }, 5000);
    }
  }
  
  function hideToast() {
    if (toast) {
      toast.classList.remove('show');
    }
  }
  
  // Close toast on button click
  if (toastClose) {
    toastClose.addEventListener('click', hideToast);
  }
}

// Add scroll event listener for header styling
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});