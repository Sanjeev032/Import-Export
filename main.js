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

// Services data
const servicesData = [
    {
        icon: 'fas fa-ship',
        title: 'Sea Freight',
        description: 'Cost-effective and reliable sea freight solutions for all your import/export needs with global coverage.',
        link: '#sea-freight'
    },
    {
        icon: 'fas fa-plane',
        title: 'Air Freight',
        description: 'Fast and efficient air freight services to ensure your time-sensitive shipments arrive on schedule.',
        link: '#air-freight'
    },
    {
        icon: 'fas fa-truck',
        title: 'Land Transport',
        description: 'Comprehensive road transportation services with a focus on safety, reliability, and timely delivery.',
        link: '#land-transport'
    },
    {
        icon: 'fas fa-warehouse',
        title: 'Warehousing',
        description: 'Secure and strategically located warehousing solutions with advanced inventory management.',
        link: '#warehousing'
    },
    {
        icon: 'fas fa-boxes',
        title: 'Packaging',
        description: 'Custom packaging solutions designed to protect your goods during transit and storage.',
        link: '#packaging'
    },
    {
        icon: 'fas fa-file-contract',
        title: 'Customs Clearance',
        description: 'Expert customs brokerage services to ensure smooth and compliant cross-border transactions.',
        link: '#customs-clearance'
    }
];

// Countdown timer function
function startCountdown() {
    const countdownElements = document.querySelectorAll('.countdown-timer');
    if (!countdownElements.length) return;
    
    // Set the date we're counting down to (3 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);
    countDownDate.setHours(12, 0, 0, 0);
    
    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
            
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Update the countdown elements
        countdownElements.forEach(element => {
            const daysEl = element.querySelector('[data-days]');
            const hoursEl = element.querySelector('[data-hours]');
            const minutesEl = element.querySelector('[data-minutes]');
            
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        });
            
        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElements.forEach(element => {
                element.innerHTML = 'Offer has expired!';
            });
        }
    }, 1000);
}

// Modal functionality
function setupModals() {
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.querySelector('a[href="#login"]');
    const signupBtn = document.querySelector('a[href="#signup"]');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const closeBtns = document.querySelectorAll('.close-modal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Open modal functions
    function openModal(modal) {
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
    }

    function closeModal(modal) {
        document.body.style.overflow = '';
        modal.classList.remove('active');
    }

    // Event listeners for opening modals
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(signupModal);
            openModal(loginModal);
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(signupModal);
        });
    }

    // Toggle between login and signup modals
    if (showSignup) {
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(signupModal);
        });
    }


    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(signupModal);
            openModal(loginModal);
        });
    }

    // Close modals when clicking the close button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });

    // Form submission handlers
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your login logic here
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            console.log('Login attempt with:', { email, password });
            // Close modal after successful login
            closeModal(loginModal);
            // Show success message or redirect
            alert('Login successful!');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your signup logic here
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            console.log('Signup attempt with:', { name, email, password });
            // Close modal after successful signup
            closeModal(signupModal);
            // Show success message or redirect
            alert('Account created successfully! Please check your email to verify your account.');
        });
    }
}

// Slider functionality
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; // Exit if no slides found
    
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds per slide

    // Create dots for navigation
    function createDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = ''; // Clear existing dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('data-slide', index);
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dotsContainer.appendChild(dot);
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        // Reset all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Handle loop around
        if (slideIndex >= slides.length) {
            currentSlide = 0;
        } else if (slideIndex < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = slideIndex;
        }
        
        // Activate current slide and dot
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
        
        // Update ARIA attributes for accessibility
        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== currentSlide);
            slide.setAttribute('aria-live', index === currentSlide ? 'polite' : 'off');
        });
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Start auto play
    function startAutoPlay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Pause auto play when hovering over slider
    function pauseAutoPlay() {
        if (slideInterval) clearInterval(slideInterval);
    }

    // Initialize slider
    function init() {
        createDots();
        goToSlide(0);
        startAutoPlay();

        // Event listeners for navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                pauseAutoPlay();
                startAutoPlay();
            });
        }

        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                pauseAutoPlay();
                startAutoPlay();
            });
        }


        // Dot navigation
        if (dotsContainer) {
            dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('dot')) {
                    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                    if (!isNaN(slideIndex)) {
                        goToSlide(slideIndex);
                        pauseAutoPlay();
                        startAutoPlay();
                    }
                }
            });
        }

        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', pauseAutoPlay);
            slider.addEventListener('mouseleave', startAutoPlay);
            slider.addEventListener('focusin', pauseAutoPlay);
            slider.addEventListener('focusout', startAutoPlay);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
                pauseAutoPlay();
                startAutoPlay();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                pauseAutoPlay();
                startAutoPlay();
            }
        });

        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;

        if (slider) {
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                pauseAutoPlay();
            }, { passive: true });

            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoPlay();
            }, { passive: true });
        }

        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance to trigger swipe
            const swipeDistance = touchEndX - touchStartX;

            if (swipeDistance > swipeThreshold) {
                // Swipe right - previous slide
                prevSlide();
            } else if (swipeDistance < -swipeThreshold) {
                // Swipe left - next slide
                nextSlide();
            }
        }
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Recalculate slide positions if needed
                goToSlide(currentSlide);
            }, 250);
        });
    }

    // Initialize the slider
    init();
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        pauseAutoPlay();
    });
}

// Initialize the application
function init() {
    setupNavbar();
    renderServices();
    setupScrollAnimations();
    setupIntersectionObserver();
    setupModals();
    setupSmoothScrolling();
    initSlider();
}

// Setup scroll indicator functionality
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// Navbar functionality
function setupNavbar() {
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
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

// Slider functionality
function initSlider() {
    let currentSlide = 0;
    let slides = [];
    let dots = [];
    let slideInterval;
    const slideDuration = 5000; // 5 seconds per slide

    // Create slides
    sliderData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`;
        
        // Create badge if exists
        const badgeHtml = slide.badge ? `<div class="promotion-badge ${slide.animation}">${slide.badge}</div>` : '';
        
        // Create features list if exists
        let featuresHtml = '';
        if (slide.features && slide.features.length) {
            featuresHtml = `
                <ul class="promotion-features">
                    ${slide.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        }
        
        // Create timer if exists
        const timerHtml = slide.timer ? `
            <div class="countdown-timer">
                ${slide.timer}
            </div>
        ` : '';
        
        // Create secondary button if timer exists
        const secondaryButton = slide.timer ? `
            <a href="#contact" class="btn btn-secondary">
                Contact Us
            </a>
        ` : '';
        
        slideElement.innerHTML = `
            <div class="slide-content">
                ${badgeHtml}
                <h1 class="animate-slide-up" style="animation-delay: 0.3s">${slide.title}</h1>
                <p class="animate-slide-up" style="animation-delay: 0.4s">${slide.description}</p>
                ${featuresHtml}
                ${timerHtml}
                <div class="slide-buttons">
                    <a href="${slide.buttonLink}" class="btn btn-primary animate-slide-up" style="animation-delay: 0.5s">
                        ${slide.buttonText}
                    </a>
                    ${secondaryButton}
                </div>
            </div>
        `;
        
        slider.appendChild(slideElement);
        slides.push(slideElement);

        // Create dots
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.slide = index;
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetSlideInterval();
        });
        
        sliderDots.appendChild(dot);
        dots.push(dot);
    });

    // Navigation functions
    function goToSlide(index) {
        // Reset all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Set new active slide and dot
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Add animation classes
        const slideContent = slides[currentSlide].querySelector('.slide-content');
        slideContent.classList.add('animate-slide-up');
        
        // Remove animation classes after animation completes
        setTimeout(() => {
            slideContent.classList.remove('animate-slide-up');
        }, 1000);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideInterval();
    });

        // Start with first slide active
    goToSlide(0);
    
    // Start auto-rotation
    startSlideInterval();
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        resetSlideInterval();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetSlideInterval();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            resetSlideInterval();
        }
    });
    
    // Add swipe support for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            nextSlide();
            resetSlideInterval();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            prevSlide();
            resetSlideInterval();
        }
    }
}

// Render services
function renderServices() {
    servicesData.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-card';
        serviceElement.style.animationDelay = `${index * 0.1}s`;
        
        serviceElement.innerHTML = `
            <div class="service-content">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}" class="service-link">
                    Learn More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        servicesGrid.appendChild(serviceElement);
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.service-card, .section-title, .section-subtitle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Don't prevent default for # links that should do nothing
            if (targetId === '#') return;
            
            // Only prevent default for anchor links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80; // Height of fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without adding to history
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    } else {
                        window.location.hash = targetId;
                    }
                }
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const hamburger = document.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Handle initial page load with hash in URL
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
