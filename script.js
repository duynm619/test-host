// Hiệu ứng xuất hiện khi cuộn
const animateElements = document.querySelectorAll('[data-animate]');

function handleScroll() {
  animateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // chạy 1 lần khi load trang
