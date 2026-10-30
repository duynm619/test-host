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
  const enableDragScroll = (track) => {
    track.addEventListener("dragstart", (event) => event.preventDefault());

    let dragStartX = 0;
    let dragStartScrollLeft = 0;
    let lastPointerX = 0;
    let lastPointerTime = 0;
    let velocity = 0;
    let dragging = false;
    let hasDragged = false;
    let suppressNextClick = false;
    let momentumFrame = 0;

    track.addEventListener("click", (event) => {
      if (!suppressNextClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressNextClick = false;
    }, true);

    track.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch" || event.button !== 0) return;
      cancelAnimationFrame(momentumFrame);
      track.classList.remove("is-inertial");
      dragStartX = event.clientX;
      dragStartScrollLeft = track.scrollLeft;
      lastPointerX = event.clientX;
      lastPointerTime = event.timeStamp;
      velocity = 0;
      dragging = true;
      hasDragged = false;
      track.classList.add("is-dragging");
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const deltaX = event.clientX - dragStartX;
      if (Math.abs(deltaX) > 5) hasDragged = true;
      const elapsed = event.timeStamp - lastPointerTime;
      if (elapsed > 0) {
        velocity = -(event.clientX - lastPointerX) / elapsed;
      }
      lastPointerX = event.clientX;
      lastPointerTime = event.timeStamp;
      track.scrollLeft = dragStartScrollLeft - deltaX;
    });

    const stopDragging = (withMomentum) => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove("is-dragging");
      suppressNextClick = hasDragged;
      if (suppressNextClick) {
        window.setTimeout(() => {
          suppressNextClick = false;
        }, 0);
      }
      if (!withMomentum || Math.abs(velocity) < 0.02) return;

      track.classList.add("is-inertial");
      let previousTime = 0;
      const decelerate = (time) => {
        const elapsed = previousTime ? Math.min(time - previousTime, 32) : 16;
        previousTime = time;
        track.scrollLeft += velocity * elapsed;
        velocity *= Math.exp(-elapsed / 280);

        const atEdge = track.scrollLeft <= 0
          || track.scrollLeft >= track.scrollWidth - track.clientWidth;
        if (Math.abs(velocity) < 0.02 || atEdge) {
          track.classList.remove("is-inertial");
          momentumFrame = 0;
          return;
        }
        momentumFrame = requestAnimationFrame(decelerate);
      };
      momentumFrame = requestAnimationFrame(decelerate);
    };

    track.addEventListener("pointerup", () => stopDragging(true));
    track.addEventListener("pointercancel", () => stopDragging(false));
    track.addEventListener("lostpointercapture", () => stopDragging(false));
  };

  serviceCarousel && enableDragScroll(serviceCarousel);

  const testimonialTrack = document.querySelector("#testimonial-track");
  testimonialTrack && enableDragScroll(testimonialTrack);

  document.querySelectorAll("[data-testimonial]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!testimonialTrack) return;
      const direction = button.dataset.testimonial === "next" ? 1 : -1;
      const card = testimonialTrack.querySelector(".testimonial-card");
      testimonialTrack.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 280) + 15), behavior: "smooth" });
    });
  });
})();
