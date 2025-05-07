
document.addEventListener('DOMContentLoaded', function() {
  const reservations = [
    'Someone in Bronx, NY just reserved a 2018 Chrysler 300.',
    '5 people are viewing the 2022 Hyundai Sonata right now.',
    'A customer in Queens just booked a Mazda CX-9 Grand Touring.',
    '2 people browsing the 2017 Nissan Altima.',
    'A Brooklyn client just locked in a Chrysler 300S for the weekend.'
  ];

  let currentReservationIndex = 0;
  const reservationText = document.getElementById('reservation-text');

  if (reservationText) {
    setInterval(() => {
      currentReservationIndex = (currentReservationIndex + 1) % reservations.length;
      reservationText.textContent = reservations[currentReservationIndex];
    }, 5000);
  }

  window.scrollToAvailability = function() {
    const availabilitySection = document.querySelector('.date-picker');
    if (availabilitySection) {
      availabilitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = document.querySelectorAll('.testimonial-slider blockquote');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((quote, i) => {
      quote.classList.toggle('active', i === index);
    });
  }

  if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);

    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 6000);
  }

  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
});
