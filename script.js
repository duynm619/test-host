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

// Slider
const track = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.slick-dots');

let index = 0;
const visibleCount = 4;

// tạo dots
for (let i = 0; i < Math.ceil(slides.length / visibleCount); i++) {
  const btn = document.createElement('button');
  if (i === 0) btn.classList.add('active');
  dotsContainer.appendChild(btn);
}

const dots = dotsContainer.querySelectorAll('button');

function updateSlider() {
  const offset = index * (slides[0].offsetWidth + 15);
  track.style.transform = `translateX(-${offset}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[Math.floor(index / visibleCount)].classList.add('active');
}

next.addEventListener('click', () => {
  index++;
  if (index > slides.length - visibleCount) index = 0; // vòng tròn
  updateSlider();
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - visibleCount;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i * visibleCount;
    updateSlider();
  });
});

// Auto play
setInterval(() => {
  index++;
  if (index > slides.length - visibleCount) index = 0;
  updateSlider();
}, 3000);
