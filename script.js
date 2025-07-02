document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('header');
    const headerOffset = header.offsetHeight; // Get the header's height (for scroll offset)

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
            // Get the section's position relative to the top of the document
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionHeight = section.offsetHeight;

            // Define the trigger point for section activation
            // This makes the section active when it's just below the fixed header
            // Adjust the '-50' value as needed to fine-tune when the link becomes active
            if (window.pageYOffset >= sectionTop - headerOffset - 50 &&
                window.pageYOffset < sectionTop + sectionHeight - headerOffset - 50) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        removeActiveClass(); // First, remove active from all links

        if (currentActiveSectionId) {
            // Find the nav link that matches the current active section ID
            const correspondingLink = document.querySelector(`a[href="#${currentActiveSectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        } else {
            // If no section is in view (e.g., scrolled to very top before first section
            // or in a gap between sections), typically highlight 'Home'
            // This ensures 'Home' is active when at the very top of the page
            if (window.pageYOffset < headerOffset + 50) { // If near the top
                 document.querySelector('a[href="#home"]').classList.add('active');
            }
        }
    }

    // Smooth scrolling logic for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default instant jump

            // Temporarily disable scroll listener to prevent it from fighting
            // with the manual click-triggered active state during smooth scroll
            window.removeEventListener('scroll', setActiveLinkOnScroll);

            // Immediately set the clicked link as active
            removeActiveClass();
            this.classList.add('active');

            const targetId = this.getAttribute('href'); // e.g., "#services"
            const targetElement = document.querySelector(targetId); // The actual section element

            if (targetElement) {
                // Calculate the position to scroll to, accounting for the fixed header
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // This is the key for smooth scrolling!
                });

                // Re-enable the scroll listener after a short delay
                // to allow smooth scroll to finish before reactivating scroll-based highlighting
                setTimeout(() => {
                    window.addEventListener('scroll', setActiveLinkOnScroll);
                }, 800); // Adjust delay if needed (should be slightly longer than smooth scroll duration)
            }
        });
    });

    // Smooth scrolling for the "Explore Our Services" button
    const exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            // Temporarily disable scroll listener
            window.removeEventListener('scroll', setActiveLinkOnScroll);

            // Highlight the 'Services' link when the button is clicked
            removeActiveClass();
            document.querySelector('a[href="#services"]').classList.add('active');

            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // This is the key for smooth scrolling!
                });

                // Re-enable the scroll listener after a short delay
                setTimeout(() => {
                    window.addEventListener('scroll', setActiveLinkOnScroll);
                }, 800);
            }
        });
    }

    // Add event listener for scroll to continuously update active link
    window.addEventListener('scroll', setActiveLinkOnScroll);

    // Call setActiveLinkOnScroll once on page load to set the initial active state
    setActiveLinkOnScroll();
});