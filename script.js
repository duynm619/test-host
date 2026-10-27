(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("is-open", !isOpen);
    });

    mainNav.querySelectorAll(".nav-group > a").forEach((link) => {
      link.addEventListener("click", (event) => {
        const group = link.parentElement;
        if (window.innerWidth <= 780 && !group.classList.contains("expanded")) {
          event.preventDefault();
          group.classList.add("expanded");
        }
      });
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 780 && link.matches(".nav-group > a")) return;
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      }
    });
  }

  const trackingForm = document.querySelector("#tracking-form");
  const trackingInput = document.querySelector("#tracking-code");
  const trackingFeedback = document.querySelector("#tracking-feedback");

  trackingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = trackingInput.value.trim();

    if (!code) {
      trackingFeedback.textContent = document.documentElement.lang === "en"
        ? "Please enter a tracking number or phone number."
        : "Vui lòng nhập mã đơn hàng hoặc số điện thoại.";
      trackingInput.focus();
      return;
    }

    trackingFeedback.textContent = document.documentElement.lang === "en"
      ? `Tracking number ${code} received. Live tracking will be available once connected to the shipment system.`
      : `Đã nhận mã ${code}. Tính năng tra cứu sẽ sẵn sàng khi kết nối hệ thống vận đơn.`;
  });

  const contactForm = document.querySelector("#contact-form");
  const contactFeedback = document.querySelector("#contact-feedback");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();

    contactFeedback.textContent = document.documentElement.lang === "en"
      ? `Thank you, ${name}. Your request has been recorded in this demo. Call 0976 757 226 for immediate assistance.`
      : `Cảm ơn ${name}. Yêu cầu đã được ghi nhận trong bản demo; vui lòng gọi 0976 757 226 để được hỗ trợ ngay.`;
    contactForm.reset();
  });

  document.querySelector(".float-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const serviceCarousel = document.querySelector("#service-carousel");
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!serviceCarousel) return;
      const direction = button.dataset.scroll === "next" ? 1 : -1;
      serviceCarousel.scrollBy({ left: direction * serviceCarousel.clientWidth * 0.72, behavior: "smooth" });
    });
  });

  const testimonialTrack = document.querySelector("#testimonial-track");
  document.querySelectorAll("[data-testimonial]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!testimonialTrack) return;
      const direction = button.dataset.testimonial === "next" ? 1 : -1;
      const card = testimonialTrack.querySelector(".testimonial-card");
      testimonialTrack.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 280) + 15), behavior: "auto" });
    });
  });
})();
