document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation state based on current page
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Set active link based on current page
        if (currentPage === 'index.html' || currentPage === '') {
            // Home page - check if we have a hash
            const hash = window.location.hash;
            if (hash === '#about') {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#about') {
                        link.classList.add('active');
                    }
                });
            } else if (hash === '#content') {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#content') {
                        link.classList.add('active');
                    }
                });
            } else if (hash === '#contact') {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#contact') {
                        link.classList.add('active');
                    }
                });
            } else {
                // Default to home
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#home') {
                        link.classList.add('active');
                    }
                });
            }
        } else if (currentPage === 'websites.html') {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'websites.html') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Initialize navigation consistency across all pages
    function initializeNavigation() {
        // Set active navigation state
        setActiveNavigation();
        
        // Ensure header is properly initialized
        const header = document.querySelector('.header');
        if (header) {
            // Set initial header state
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
        
        // Ensure logo links are properly styled
        const logoLinks = document.querySelectorAll('.logo-link');
        logoLinks.forEach(link => {
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
        });
    }
    
    // Initialize navigation when DOM is loaded
    initializeNavigation();
    
    // Re-initialize on page visibility change (for browser back/forward)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            initializeNavigation();
        }
    });
    
    // Update active navigation when hash changes
    window.addEventListener('hashchange', setActiveNavigation);
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const mobileNavLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background on Scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Keep elements visible when scrolling back up
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .content-card, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero title displays immediately - no typing effect

    // Enhanced Parallax Effects
    const heroSection = document.querySelector('.hero');
    const floatingCards = document.querySelectorAll('.floating-card');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const floatingShapes = document.querySelectorAll('.shape');
    const aboutSection = document.querySelector('.about');
    const contentSection = document.querySelector('.content');
    const contactSection = document.querySelector('.contact');

    // Continuous animation loop for floating effect - simpler approach
    function animateFloatingCards() {
        const scrolled = window.pageYOffset;
        
        floatingCards.forEach((card, index) => {
            if (scrolled < window.innerHeight) {
                // Add subtle floating animation on top of CSS positioning
                const floatY = Math.sin(Date.now() * 0.001 + index * 2) * 8;
                const floatX = Math.cos(Date.now() * 0.0008 + index * 1.5) * 5;
                const rotation = scrolled * 0.02;
                
                // Use CSS transform to add floating effect without overriding position
                card.style.transform = `translate(${floatX}px, ${floatY}px) rotateY(${rotation}deg)`;
            } else {
                // Reset transform when scrolled past hero
                card.style.transform = 'translate(0, 0) rotateY(0deg)';
            }
        });
        
        requestAnimationFrame(animateFloatingCards);
    }
    
    // Start the animation loop
    animateFloatingCards();

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Hero Section Parallax
        if (heroSection && scrolled < window.innerHeight) {
            const heroSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * heroSpeed}px)`;
            
            // Parallax layers in hero
            parallaxLayers.forEach((layer, index) => {
                const speed = 0.1 + (index * 0.05);
                layer.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.0001})`;
            });
            
            // Floating shapes parallax
            floatingShapes.forEach((shape, index) => {
                const speed = 0.05 + (index * 0.02);
                const rotation = scrolled * 0.1 * (index + 1);
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
            });
        }

        // About Section Parallax
        if (aboutSection) {
            const aboutRect = aboutSection.getBoundingClientRect();
            const aboutSpeed = 0.3;
            
            if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
                const aboutScroll = scrolled - aboutSection.offsetTop + window.innerHeight;
                const aboutLayers = aboutSection.querySelectorAll('.parallax-layer');
                
                aboutLayers.forEach((layer, index) => {
                    const speed = 0.1 + (index * 0.05);
                    layer.style.transform = `translateY(${aboutScroll * speed}px)`;
                });
            }
        }

        // Content Section Parallax
        if (contentSection) {
            const contentRect = contentSection.getBoundingClientRect();
            const contentSpeed = 0.25;
            
            if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
                const contentScroll = scrolled - contentSection.offsetTop + window.innerHeight;
                const contentLayers = contentSection.querySelectorAll('.parallax-layer');
                
                contentLayers.forEach((layer, index) => {
                    const speed = 0.08 + (index * 0.04);
                    layer.style.transform = `translateY(${contentScroll * speed}px)`;
                });
            }
        }

        // Contact Section Parallax
        if (contactSection) {
            const contactRect = contactSection.getBoundingClientRect();
            const contactSpeed = 0.2;
            
            if (contactRect.top < window.innerHeight && contactRect.bottom > 0) {
                const contactScroll = scrolled - contactSection.offsetTop + window.innerHeight;
                const contactLayers = contactSection.querySelectorAll('.parallax-layer');
                
                contactLayers.forEach((layer, index) => {
                    const speed = 0.06 + (index * 0.03);
                    layer.style.transform = `translateY(${contactScroll * speed}px)`;
                });
            }
        }
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization: Throttle mouse events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply debouncing to scroll events
    window.addEventListener('scroll', debounce(function() {
        // Scroll-related functions are already handled above
    }, 16)); // ~60fps

    // Apply throttling to mouse events
    const throttledMouseMove = throttle(function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (mouseX - centerX) / centerX;
        const moveY = (mouseY - centerY) / centerY;

        // Only apply mouse parallax on desktop
        if (window.innerWidth > 768) {
            // Hero section shapes mouse parallax
            floatingShapes.forEach((shape, index) => {
                const speed = 0.02 + (index * 0.005);
                const x = moveX * speed * 50;
                const y = moveY * speed * 50;
                const currentTransform = shape.style.transform || '';
                const translateMatch = currentTransform.match(/translateY\([^)]+\)/);
                const translateY = translateMatch ? translateMatch[0] : 'translateY(0px)';
                const rotateMatch = currentTransform.match(/rotate\([^)]+\)/);
                const rotate = rotateMatch ? rotateMatch[0] : 'rotate(0deg)';
                
                shape.style.transform = `${translateY} ${rotate} translateX(${x}px) translateY(${y}px)`;
            });

            // Floating cards mouse parallax - disabled to prevent conflicts with animation loop
            // Cards are now animated continuously for smooth floating effect

            // Parallax layers mouse effect
            parallaxLayers.forEach((layer, index) => {
                const speed = 0.005 + (index * 0.002);
                const x = moveX * speed * 20;
                const y = moveY * speed * 20;
                const currentTransform = layer.style.transform || '';
                
                // Extract existing transform values
                const translateYMatch = currentTransform.match(/translateY\([^)]+\)/);
                const translateY = translateYMatch ? translateYMatch[0] : 'translateY(0px)';
                const scaleMatch = currentTransform.match(/scale\([^)]+\)/);
                const scale = scaleMatch ? scaleMatch[0] : 'scale(1)';
                
                layer.style.transform = `${translateY} ${scale} translateX(${x}px) translateY(${y}px)`;
            });
        }
    }, 16); // ~60fps

    // Replace the mousemove event listener with throttled version
    document.addEventListener('mousemove', throttledMouseMove);

    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link, .content-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Easter Egg: Konami Code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        const hero = document.querySelector('.hero');
        hero.style.animation = 'rainbow 3s ease-in-out';
        
        setTimeout(() => {
            hero.style.animation = '';
        }, 3000);
    }

    // Add rainbow animation for Easter egg
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { background: linear-gradient(135deg, #ff6b6b, #feca57); }
            16.66% { background: linear-gradient(135deg, #feca57, #48dbfb); }
            33.33% { background: linear-gradient(135deg, #48dbfb, #ff9ff3); }
            50% { background: linear-gradient(135deg, #ff9ff3, #54a0ff); }
            66.66% { background: linear-gradient(135deg, #54a0ff, #5f27cd); }
            83.33% { background: linear-gradient(135deg, #5f27cd, #00d2d3); }
            100% { background: linear-gradient(135deg, #f9fafb, #f3f4f6); }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScroll = debounce(function() {
        // Scroll-related functions here
    }, 10);

    window.addEventListener('scroll', debouncedScroll);
});
