document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a.nav-link');
    // Update section IDs to match new HTML navigation
    const sections = document.querySelectorAll('section[id="index"], section[id="services"], section[id="about-us"], section[id="contact"]');
    const header = document.querySelector('header');
    let headerOffset = header.offsetHeight; // Get the header's height (for scroll offset)

    // Recalculate header offset on resize, useful if header height changes responsively
    window.addEventListener('resize', () => {
        headerOffset = header.offsetHeight;
    });

    // Function to remove 'active' class from all navigation links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Function to set the 'active' class on the navigation link
    // corresponding to the section currently in view
    function setActiveLinkOnScroll() {
        let currentActiveSectionId = null;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionHeight = section.offsetHeight;

            // Adjust the offset for when the link becomes active.
            const activationOffset = headerOffset + 20; // 20px below the header for activation

            if (window.pageYOffset >= sectionTop - activationOffset &&
                window.pageYOffset < sectionTop + sectionHeight - activationOffset) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        removeActiveClass();

        if (currentActiveSectionId) {
            const correspondingLink = document.querySelector(`a[href="#${currentActiveSectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        } else {
            // Default to 'Index' (formerly 'Innovate') if at the very top or between sections
            if (window.pageYOffset < headerOffset + 50) {
                 document.querySelector('a[href="#index"]').classList.add('active');
            }
        }
    }

    // Smooth scrolling logic for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            window.removeEventListener('scroll', setActiveLinkOnScroll); // Temporarily disable scroll listener

            removeActiveClass();
            this.classList.add('active'); // Immediately set active class on clicked link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset; // Account for fixed header

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Re-enable the scroll listener after smooth scroll completes
                setTimeout(() => {
                    window.addEventListener('scroll', setActiveLinkOnScroll);
                    setActiveLinkOnScroll(); // Call it once to update if scroll landed exactly
                }, 800); // This timeout should be roughly equal to or slightly longer than the smooth scroll duration
            }
        });
    });

    // Smooth scrolling for the "Explore AI Frontiers" button (now points to Services)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.removeEventListener('scroll', setActiveLinkOnScroll);

            // Highlight the 'Services' link when this button is clicked
            removeActiveClass();
            document.querySelector('a[href="#services"]').classList.add('active');

            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    window.addEventListener('scroll', setActiveLinkOnScroll);
                    setActiveLinkOnScroll();
                }, 800);
            }
        });
    }

    // Smooth scrolling for the "Join Our Ecosystem" button (specific to Connect section)
    const contactCtaButton = document.querySelector('.contact-cta');
    if (contactCtaButton) {
        contactCtaButton.addEventListener('click', function() {
            window.removeEventListener('scroll', setActiveLinkOnScroll);

            // Highlight the 'Contact' link when this button is clicked
            removeActiveClass();
            document.querySelector('a[href="#contact"]').classList.add('active');

            const connectSection = document.querySelector('#contact');
            if (connectSection) {
                const elementPosition = connectSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    window.addEventListener('scroll', setActiveLinkOnScroll);
                    setActiveLinkOnScroll();
                }, 800);
            }
        });
    }

    // Add event listener for scroll to continuously update active link
    window.addEventListener('scroll', setActiveLinkOnScroll);

    // Call setActiveLinkOnScroll once on page load to set the initial active state
    setActiveLinkOnScroll();
});
