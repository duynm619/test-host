const slidesData = [
    { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", caption: "Vịnh Hạ Long – Kỳ quan thiên nhiên thế giới" },
    { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", caption: "Đà Nẵng – Thành phố của những cây cầu" },
    { img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", caption: "Huế – Cố đô thơ mộng" },
    { img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", caption: "Hà Giang – Nơi cực Bắc Tổ quốc" },
    { img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", caption: "Hội An – Phố cổ lung linh đèn lồng" },
    { img: "https://images.unsplash.com/photo-1658297908384-08d9248a00c8", caption: "Ninh Bình – Vịnh Hạ Long trên cạn" },
    { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", caption: "Phú Quốc – Đảo ngọc thiên đường" },
    { img: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a", caption: "Sa Pa – Thành phố trong mây" },
];

const track = document.getElementById("track");
const captionEl = document.getElementById("caption");
const dotsWrap = document.getElementById("dotsWrap");
let slides = [],
    index = 0,
    slideW = 0,
    gap = 16,
    step = 0,
    baseOffset = 0,
    isDragging = false,
    startX = 0,
    scrollX = 0,
    velocity = 0,
    dots = [];

// Cuộn mượt đến phần được nhấn
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // trừ chiều cao header nếu cần
                behavior: "smooth",
            });
        }
    });
});

function initSlides() {
    const clones = [slidesData.at(0), slidesData.at(1), ...slidesData, slidesData[0], slidesData[1]];
    for (let s of clones) {
        const div = document.createElement("div");
        div.className = "slide";
        div.innerHTML = `<img src="${s.img}?auto=format&fit=crop&w=1200&q=80" alt="">`;
        track.appendChild(div);
    }
    slides = Array.from(track.children);
}
function initDots() {
    for (let i = 0; i < slidesData.length; i++) {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.onclick = () => goTo(i);
        dotsWrap.appendChild(dot);
        dots.push(dot);
    }
}
function calc() {
    slideW = slides[0].getBoundingClientRect().width;
    step = slideW + gap;
    baseOffset = document.querySelector(".slider-viewport").clientWidth / 2 - slideW / 2;
}
function translate(x) {
    track.style.transform = `translateX(${x}px)`;
}
function update() {
    const idx = ((index % slidesData.length) + slidesData.length) % slidesData.length;
    captionEl.style.opacity = 0;
    setTimeout(() => {
        captionEl.textContent = slidesData[idx].caption;
        captionEl.style.opacity = 1;
    }, 150);
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    slides.forEach((s) => s.classList.remove("is-center"));
    slides[index + 2].classList.add("is-center");
}
function smoothTo(n) {
    track.style.transition = "transform .6s cubic-bezier(.22,.9,.35,1)";
    scrollX = -n * step;
    translate(scrollX + baseOffset);
    setTimeout(() => {
        track.style.transition = "none";
        if (n < 2) {
            index = slidesData.length - 2 + n;
            scrollX = -(index + 2) * step;
        }
        if (n >= slidesData.length + 2) {
            index = n - (slidesData.length + 2);
            scrollX = -(index + 2) * step;
        }
        translate(scrollX + baseOffset);
        update();
    }, 600);
}
function goTo(i) {
    index = i;
    smoothTo(i + 2);
}
function next() {
    goTo(index + 1 >= slidesData.length ? 0 : index + 1);
}
function prev() {
    goTo(index - 1 < 0 ? slidesData.length - 1 : index - 1);
}
function snap() {
    const nearest = Math.round(-scrollX / step);
    index = nearest - 2;
    smoothTo(nearest);
}
const viewport = document.querySelector(".slider-viewport");
viewport.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX;
    velocity = 0;
    track.style.transition = "none";
});
viewport.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    scrollX += dx;
    translate(scrollX + baseOffset);
    velocity = dx;
    startX = e.clientX;
});
window.addEventListener("pointerup", () => {
    if (!isDragging) return;
    isDragging = false;
    const momentum = Math.sign(velocity) * Math.min(Math.abs(velocity), 30);
    scrollX += momentum * 10;
    snap();
});
document.querySelector(".btn-next").onclick = next;
document.querySelector(".btn-prev").onclick = prev;

initSlides();
initDots();
calc();
scrollX = -(index + 2) * step;
translate(scrollX + baseOffset);
update();
window.addEventListener("resize", () => {
    calc();
    translate(scrollX + baseOffset);
});
