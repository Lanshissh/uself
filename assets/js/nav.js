document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-links");

    // Sticky Navbar
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-fixed");
        } else {
            navbar.classList.remove("navbar-fixed");
        }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", function () {
        console.log("Hamburger menu clicked!"); // Debugging
        navMenu.classList.toggle("active");
        console.log("Active class added:", navMenu.classList.contains("active")); // Debugging
    });

    // Add "active" class to clicked link and remove from others
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Add 'active' to the clicked link
            this.classList.add("active");
        });
    });
});
