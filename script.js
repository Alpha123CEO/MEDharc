// script.js - UI and Utility Helpers for MEDHARC, LLC
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Set Copyright Year ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- 2. Mobile Navigation Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('primary-nav');
    
    if (menuToggle && nav) {
        
        // Function to toggle the navigation state
        function toggleNav() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle ARIA attributes
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
            
            // Toggle a class on the navigation for CSS styling (e.g., display: flex)
            nav.classList.toggle('is-open'); 
            
            // NOTE: The previous script used aria-hidden. Class-toggling is more common 
            // for CSS control, but the JS logic below handles the aria attributes correctly.
            // If you wish to use aria-hidden="true/false" for visibility control:
            // nav.setAttribute('aria-hidden', String(isExpanded)); 
        }

        // Event Listener for the toggle button
        menuToggle.addEventListener('click', toggleNav);

        // Optional: Close the menu when a link is clicked (common mobile UX)
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('is-open')) {
                    toggleNav();
                }
            });
        });
    }

    // --- 3. Placeholder for other UI/Form Status (Not required by index.html but common) ---
    /*
    const contactForm = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus'); 
    
    // NOTE: Your index.html does not contain elements with IDs 'contactForm' or 'formStatus'
    // This section is commented out as it is unnecessary for the current HTML.
    
    if (contactForm && statusEl) {
        contactForm.addEventListener('submit', function(e) {
            statusEl.textContent = 'Sending...';
        });
    }
    */
});
