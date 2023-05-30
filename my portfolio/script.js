// Smooth scrolling for navigation links
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    const offset = 80; // Adjust this value to offset the scroll position

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});

// Form submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Perform form validation here if needed

  // Simulating form submission with a delay (replace this with your actual form submission logic)
  setTimeout(() => {
    contactForm.reset();
    successMessage.style.display = 'block';

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000); // Show success message for 5 seconds
  }, 1000); // Simulating form submission delay of 1 second
});
