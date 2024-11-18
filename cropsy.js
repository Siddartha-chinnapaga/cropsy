function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Toggle the nav menu visibility
    navLinks.classList.toggle('active');

    // Add or remove the "open" class for animation
    hamburger.classList.toggle('open');
  }