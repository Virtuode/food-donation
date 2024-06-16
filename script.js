document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const donateForm = document.getElementById('donate-form');
    const contactForm = document.getElementById('contact-form');
    const volunteerForm = document.getElementById('volunteer-form');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });

    donateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}, for your generous donation!`);
        donateForm.reset();
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}, for contacting us! We will get back to you soon.`);
        contactForm.reset();
    });

    volunteerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('volunteer-name').value;
        alert(`Thank you, ${name}, for signing up to volunteer! We will be in touch soon.`);
        volunteerForm.reset();
    });
});
