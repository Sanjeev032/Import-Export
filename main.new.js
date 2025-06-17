// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const slider = document.querySelector('.slider');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const servicesGrid = document.querySelector('.services-grid');

// Slider data with promotions and animations
const sliderData = [
    {
        title: 'Limited Time Offer!',
        description: 'Get 20% OFF on all import/export services this month. Use code: <span class="highlight">TRADE20</span> at checkout.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        buttonText: 'Claim Offer',
        buttonLink: '#get-quote',
        badge: 'HOT DEAL',
        animation: 'animate-float',
        features: [
            '✓ No hidden fees',
            '✓ 24/7 customer support',
            '✓ Worldwide shipping'
        ]
    },
    {
        title: 'New: Express Shipping',
        description: 'Get your goods delivered 50% faster with our new express shipping service. Limited slots available!',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        buttonText: 'Book Now',
        buttonLink: '#contact',
        badge: 'NEW',
        animation: 'animate-pulse',
        timer: 'Offer ends in: <div class="countdown" data-days>03</div>:<div class="countdown" data-hours>12</div>:<div class="countdown" data-minutes>45</div>',
        features: [
            '✓ 50% faster delivery',
            '✓ Real-time tracking',
            '✓ Priority handling'
        ]
    },
    {
        title: 'Bulk Order Discount',
        description: 'Order in bulk and save up to 30% on shipping costs. Perfect for businesses with high-volume shipping needs.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        buttonText: 'Get Quote',
        buttonLink: '#get-quote',
        badge: 'SAVE 30%',
        animation: 'animate-bounce',
        features: [
            '✓ Volume discounts',
            '✓ Dedicated account manager',
            '✓ Custom solutions'
        ]
    }
];

// Countdown timer function
function startCountdown() {
    const countdownElements = document.querySelectorAll('.countdown');
    if (!countdownElements.length) return;

    // Set the date we're counting down to (3 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display the result
        countdownElements.forEach(el => {
            const type = el.getAttribute('data-days') ? 'days' : 
                       el.getAttribute('data-hours') ? 'hours' : 'minutes';
            
            if (type === 'days') el.textContent = days.toString().padStart(2, '0');
            if (type === 'hours') el.textContent = hours.toString().padStart(2, '0');
            if (type === 'minutes') el.textContent = minutes.toString().padStart(2, '0');
        });
        
        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElements.forEach(el => {
                el.textContent = '00';
            });
        }
    }, 1000);
}

// Modal functionality
function setupModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    // Open modal function
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            modal.setAttribute('aria-hidden', 'false');
        }
    }
    
    // Close modal function
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
            modal.setAttribute('aria-hidden', 'true');
        }
    }
    
    // Add click event to all modal triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            openModal(modalId);
        });
    });
    
    // Add click event to close buttons
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Slider functionality
function initSlider() {
    if (!slider) return;
    
    let currentSlide = 0;
    let slides = [];
    let dots = [];
    let slideInterval;
    const slideDuration = 5000; // 5 seconds per slide
    
    // Create slides
    sliderData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.setAttribute('role', 'group');
        slideElement.setAttribute('aria-roledescription', 'slide');
        slideElement.setAttribute('aria-label', `${index + 1} of ${sliderData.length}`);
        
        // Set background image with gradient overlay
        slideElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`;
        
        // Create badge if exists
        const badgeHtml = slide.badge ? 
            `<div class="promo-badge ${slide.animation}" aria-hidden="true">${slide.badge}</div>` : '';
        
        // Create features list if exists
        let featuresHtml = '';
        if (slide.features && slide.features.length) {
            featuresHtml = `
                <ul class="promo-features">
                    ${slide.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        }
        
        // Create countdown timer if exists
        const timerHtml = slide.timer ? 
            `<div class="promo-timer" aria-hidden="true">${slide.timer}</div>` : '';
        
        // Set slide content
        slideElement.innerHTML = `
            <div class="slide-content">
                ${badgeHtml}
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-description">${slide.description}</p>
                ${featuresHtml}
                ${timerHtml}
                <div class="slide-actions">
                    <a href="${slide.buttonLink}" class="btn btn-primary">
                        ${slide.buttonText}
                    </a>
                </div>
            </div>
        `;
        
        slider.appendChild(slideElement);
        slides.push(slideElement);
        
        // Create dot for this slide
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.setAttribute('data-slide', index);
        dot.innerHTML = `<span class="sr-only">Slide ${index + 1}</span>`;
        sliderDots.appendChild(dot);
        dots.push(dot);
    });
    
    // Set initial active states
    function updateActiveStates() {
        slides.forEach((slide, index) => {
            const isActive = index === currentSlide;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
            
            // Update ARIA live region for screen readers
            if (isActive) {
                slide.setAttribute('aria-live', 'polite');
            } else {
                slide.removeAttribute('aria-live');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
            dot.setAttribute('aria-current', index === currentSlide ? 'true' : 'false');
        });
        
        // Update ARIA controls for better accessibility
        prevBtn.setAttribute('aria-controls', `slide-${currentSlide}`);
        nextBtn.setAttribute('aria-controls', `slide-${currentSlide}`);
    }
    
    // Navigation functions
    function goToSlide(index) {
        currentSlide = index;
        updateActiveStates();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateActiveStates();
        resetSlideInterval();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateActiveStates();
        resetSlideInterval();
    }
    
    // Auto-play functions
    function startSlideInterval() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    function pauseSlideInterval() {
        clearInterval(slideInterval);
    }
    
    function resetSlideInterval() {
        pauseSlideInterval();
        startSlideInterval();
    }
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
        pauseSlideInterval();
    }
    
    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideInterval();
    }
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to consider it a swipe
        const swipeDistance = touchEndX - touchStartX;
        
        if (swipeDistance > swipeThreshold) {
            prevSlide();
        } else if (swipeDistance < -swipeThreshold) {
            nextSlide();
        }
    }
    
    // Initialize the slider
    function init() {
        // Set initial active states
        updateActiveStates();
        
        // Add event listeners for navigation
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
            prevBtn.setAttribute('aria-label', 'Previous slide');
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
            nextBtn.setAttribute('aria-label', 'Next slide');
        }
        
        // Add event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetSlideInterval();
            });
        });
        
        // Add touch events
        slider.addEventListener('touchstart', handleTouchStart, { passive: true });
        slider.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Add keyboard navigation
        slider.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });
        
        // Pause autoplay on hover/focus
        slider.addEventListener('mouseenter', pauseSlideInterval);
        slider.addEventListener('mouseleave', startSlideInterval);
        slider.addEventListener('focusin', pauseSlideInterval);
        slider.addEventListener('focusout', startSlideInterval);
        
        // Start autoplay
        startSlideInterval();
    }
    
    // Initialize the slider
    init();
}

// Initialize the application
function init() {
    setupNavbar();
    setupModals();
    setupSmoothScrolling();
    initSlider();
    startCountdown();
    setupScrollAnimations();
    setupIntersectionObserver();
}

// Navbar functionality
function setupNavbar() {
    if (!hamburger || !navLinks) return;
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle aria-expanded attribute
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle aria-hidden attribute on nav links
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.setAttribute('aria-hidden', isExpanded);
        }
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.setAttribute('aria-hidden', 'true');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.setAttribute('aria-hidden', 'true');
            }
            
            // Calculate the target position with offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Smooth scroll to the target
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOMContentLoaded has already fired
    init();
}
