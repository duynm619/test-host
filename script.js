// Hiệu ứng xuất hiện khi cuộn
const animateElements = document.querySelectorAll('[data-animate]');
function handleScroll() {
  animateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Slider tự động + nút điều hướng
const slides = document.querySelectorAll('.slide');
let index = 0;
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

btnRight.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

btnLeft.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Tự động chuyển ảnh
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);
