let slideIndex = 0;

function changeSlide(n) {
  const slides = document.querySelector('.slideshow-content');
  const totalSlides = slides.children.length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  const transformValue = `translateX(-${slideIndex * 100}%)`;
  slides.style.transform = transformValue;
}
