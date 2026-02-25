// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider-image');
    let angle = 0;

    function rotateImages() {
        angle += 60; // Rotate by 60 degrees each step
        sliderImages.forEach((img, index) => {
            img.style.transform = `rotate(${angle + index * 60}deg) translate(150px) rotate(${-angle - index * 60}deg)`;
        });
    }

    setInterval(rotateImages, 2000); // Rotate every 2 seconds
});
document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.carousel');
  const slides = container.querySelectorAll('.carousel-slide');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');

  let currentIndex = 0;
  let slidesPerView = window.innerWidth < 768 ? 1 : 3;
  let maxIndex = slides.length - slidesPerView;

  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;
  };

  const updateConfig = () => {
    slidesPerView = window.innerWidth < 768 ? 1 : 3;
    maxIndex = slides.length - slidesPerView;
    currentIndex = Math.min(currentIndex, maxIndex);
    updateCarousel();
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateCarousel();
  });

  window.addEventListener('resize', updateConfig);

  // initial setup
  updateConfig();
});

  
  
  
