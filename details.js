(() => {
  const pageData = {
    japan: {
      category: "DỊCH VỤ / DỊCH VỤ ĐẾN NHẬT BẢN",
      title: "DỊCH VỤ VẬN CHUYỂN ĐẾN NHẬT BẢN, CHỈ MẤT 3 NGÀY VỚI CƯỚC PHÍ TỐI ƯU",
      sections: [
        { title: "1. Tổng quan dịch vụ", bullets: ["SH Express cung cấp dịch vụ gửi hàng đi Nhật Bản uy tín, chất lượng với giá cước cạnh tranh.", "Hỗ trợ khách hàng cá nhân, hộ kinh doanh và doanh nghiệp gửi hàng từ Việt Nam đến Nhật Bản."] },
        { title: "2. Các phương thức vận chuyển", bullets: ["Chuyển phát nhanh: thời gian dự kiến từ 3–5 ngày làm việc.", "Chuyển phát thường: thời gian dự kiến từ 5–10 ngày làm việc.", "Chuyển phát tiết kiệm: lựa chọn linh hoạt cho hàng hóa không cần giao gấp."] },
        { title: "3. Các mặt hàng nhận vận chuyển", bullets: ["Giấy tờ, chứng từ, tài liệu, hợp đồng và hóa đơn.", "Mỹ phẩm, sản phẩm chăm sóc cá nhân và thực phẩm khô theo quy định.", "Quần áo, giày dép, đồ dùng cá nhân, đồ gia dụng, máy móc và linh kiện."] },
        { title: "4. Quy trình gửi hàng (6 bước đơn giản)", bullets: ["Liên hệ SH Express để được tư vấn tuyến gửi và chi phí.", "Cung cấp thông tin hàng hóa, người gửi và người nhận.", "Chốt dịch vụ, gửi hàng về kho hoặc thống nhất phương án nhận hàng.", "Kiểm tra, đóng gói và hoàn thiện thông tin vận chuyển.", "Hàng hóa được vận chuyển và cập nhật tiến trình.", "Nhận mã vận đơn để theo dõi hành trình."] },
        { title: "5. Thông tin khách hàng cần cung cấp", bullets: ["Họ tên, địa chỉ và số điện thoại người nhận tại Nhật Bản.", "Loại hàng, số lượng, trọng lượng và kích thước kiện hàng.", "Thông tin người gửi và yêu cầu giao nhận đặc biệt (nếu có)."] }
      ], image: "SOURCE/IMAGE/SOHA pic 0.jpg"
    },
    usa: {
      category: "DỊCH VỤ / DỊCH VỤ ĐẾN MĨ",
      title: "DỊCH VỤ VẬN CHUYỂN ĐẾN MĨ TRONG 5 NGÀY",
      sections: [
        { title: "1. Gửi hàng đi Mĩ cùng SH Express", text: "SH Express hỗ trợ vận chuyển quốc tế đến các tiểu bang trên khắp nước Mĩ. Đội ngũ tư vấn sẽ giúp bạn lựa chọn phương án phù hợp với đặc tính hàng hóa, thời gian và ngân sách." },
        { title: "2. Tốc độ và chi phí linh hoạt", subtitle: "Tư vấn phương án vận chuyển phù hợp", bullets: ["Lựa chọn dịch vụ nhanh hoặc tiết kiệm theo nhu cầu.", "Báo giá và các điều kiện vận chuyển được trao đổi trước khi gửi.", "Hỗ trợ tư vấn cách tính trọng lượng và đóng gói hàng hóa."] },
        { title: "3. Các mặt hàng thường gửi", bullets: ["Quần áo, giày dép, quà tặng và hàng thủ công.", "Thực phẩm khô, mỹ phẩm và hàng tiêu dùng theo quy định nhập khẩu.", "Hồ sơ, chứng từ, hàng mẫu và một số mặt hàng kinh doanh."] },
        { title: "4. Theo dõi đơn hàng minh bạch", text: "Sau khi tiếp nhận đơn hàng, khách hàng được cung cấp mã vận đơn để theo dõi các cập nhật trong suốt hành trình. Liên hệ với đội ngũ tư vấn để xác nhận danh mục hàng hóa được nhận gửi và yêu cầu chứng từ theo từng tuyến." }
      ], image: "SOURCE/IMAGE/VẬN CHUYỂN HÀNG HÓA.png"
    },
    air: {
      category: "GÓI VẬN CHUYỂN / GÓI CƯỚC ĐƯỜNG HÀNG KHÔNG",
      title: "VẬN CHUYỂN ĐƯỜNG HÀNG KHÔNG ĐỐI VỚI HÀNG HÓA",
      sections: [
        { title: "Vận chuyển hàng không cùng SH Express", subtitle: "Giải pháp vận chuyển nhanh chóng cho hàng hóa cấp tốc", text: "Vận chuyển hàng không phù hợp với khách hàng cần gửi hàng trong thời gian ngắn. SH Express hỗ trợ tư vấn tuyến bay, chuẩn bị thông tin lô hàng và theo dõi tiến trình vận chuyển." },
        { title: "Ưu điểm của vận chuyển hàng không", subtitle: "Tốc độ vượt trội", text: "Lựa chọn phù hợp cho hồ sơ, hàng mẫu và các đơn hàng cần giao nhanh." , bullets: ["Phạm vi kết nối rộng qua các sân bay quốc tế.", "Quy trình tiếp nhận và theo dõi rõ ràng.", "Tư vấn cách đóng gói và chứng từ trước khi gửi."] },
        { title: "Các loại hàng hóa nhận vận chuyển", chips: ["Giấy tờ, chứng từ", "Hàng mẫu", "Mỹ phẩm", "Thực phẩm khô", "Thiết bị điện tử", "Linh kiện", "Hàng thời trang", "Hàng dễ vỡ", "Hàng thương mại"] },
        { title: "Quy trình vận chuyển tại SH Express", bullets: ["Tiếp nhận yêu cầu và thông tin hàng hóa.", "Tư vấn tuyến vận chuyển, thời gian và báo giá.", "Nhận hàng tại kho hoặc thống nhất phương án nhận.", "Kiểm tra, đóng gói và hoàn thiện thông tin cần thiết.", "Vận chuyển, cập nhật trạng thái và bàn giao hàng."] },
        { title: "Cam kết dịch vụ", bullets: ["Tư vấn trước khi gửi và hỗ trợ trong quá trình vận chuyển.", "Chi phí, điều kiện nhận hàng được trao đổi minh bạch.", "Đồng hành cùng khách hàng từ lúc nhận hàng đến khi hoàn tất."] }
      ], image: "SOURCE/IMAGE/GIAO HÀNG & THEO DÕI.jpg"
    },
    sea: {
      category: "GÓI VẬN CHUYỂN / GÓI CƯỚC ĐƯỜNG THỦY",
      title: "VẬN CHUYỂN ĐƯỜNG THỦY ĐỐI VỚI HÀNG HÓA",
      sections: [
        { title: "Vận chuyển đường thủy cùng SH Express", subtitle: "Giải pháp tiết kiệm cho hàng hóa khối lượng lớn", text: "Vận chuyển đường thủy là lựa chọn phù hợp với hàng cồng kềnh hoặc lô hàng lớn cần tối ưu ngân sách. SH Express hỗ trợ tư vấn phương án vận chuyển và thông tin giao nhận theo từng nhu cầu." },
        { title: "Ưu điểm của vận chuyển đường thủy", subtitle: "Chi phí tiết kiệm", text: "Phù hợp với các lô hàng lớn, hàng cồng kềnh hoặc hàng xuất nhập khẩu cần tối ưu ngân sách vận chuyển.", bullets: ["Khả năng chuyên chở khối lượng lớn.", "Kết nối mạng lưới cảng biển quốc tế.", "Hỗ trợ theo dõi và cập nhật lịch trình lô hàng."] },
        { title: "Các loại hàng hóa nhận vận chuyển", chips: ["Hàng tiêu dùng", "Thực phẩm khô", "Mỹ phẩm", "Quần áo, giày dép", "Đồ gia dụng", "Thiết bị điện tử", "Máy móc", "Nội thất", "Hàng thương mại", "Container FCL", "Hàng ghép LCL"] },
        { title: "Quy trình vận chuyển tại SH Express", bullets: ["Tiếp nhận yêu cầu, loại hàng và địa điểm giao nhận.", "Tư vấn tuyến vận chuyển và cung cấp báo giá.", "Nhận hàng tại kho hoặc theo phương án thống nhất.", "Kiểm tra, đóng gói và hướng dẫn thủ tục cần thiết.", "Vận chuyển, cập nhật trạng thái và giao hàng."] },
        { title: "Cam kết dịch vụ", bullets: ["Tư vấn miễn phí phương án vận chuyển.", "Thông tin chi phí và các điều kiện được trao đổi rõ ràng.", "Hỗ trợ khách hàng xuyên suốt quá trình gửi hàng."] }
      ], image: "SOURCE/IMAGE/Hỗ trợ gom hàng từ nhiều nguồn.png"
    },
    road: {
      category: "GÓI VẬN CHUYỂN / GÓI CƯỚC ĐƯỜNG BỘ",
      title: "VẬN CHUYỂN ĐƯỜNG BỘ LINH HOẠT, KẾT NỐI GIAO NHẬN TẬN NƠI",
      sections: [
        { title: "Vận chuyển đường bộ cùng SH Express", subtitle: "Linh hoạt cho tuyến nội địa và kết nối khu vực", text: "Dịch vụ đường bộ phù hợp với nhu cầu giao nhận linh hoạt, hàng hóa cần kết nối giữa các tỉnh thành hoặc kết hợp nhiều phương thức vận chuyển. SH Express hỗ trợ tư vấn lộ trình theo điểm nhận, điểm giao và đặc tính kiện hàng." },
        { title: "Ưu điểm của vận chuyển đường bộ", bullets: ["Linh hoạt về điểm nhận và giao hàng.", "Phù hợp với kiện hàng cần kết nối nhiều chặng.", "Có thể phối hợp với phương thức hàng không hoặc đường biển theo nhu cầu."] },
        { title: "Quy trình giao nhận", bullets: ["Tiếp nhận thông tin hàng hóa và địa chỉ giao nhận.", "Tư vấn tuyến, thời gian dự kiến và chi phí.", "Sắp xếp phương án lấy hàng, đóng gói và bàn giao.", "Cập nhật tình trạng lô hàng trong quá trình vận chuyển."] },
        { title: "Liên hệ để được tư vấn", text: "Lộ trình và khả năng nhận hàng được xác nhận theo từng khu vực, loại hàng và thời điểm gửi. Hãy liên hệ SH Express để được tư vấn giải pháp phù hợp." }
      ], image: "SOURCE/IMAGE/VẬN CHUYỂN HÀNG HÓA.png"
    },
    express: {
      category: "GÓI VẬN CHUYỂN / GÓI CƯỚC HỎA TỐC / TIẾT KIỆM",
      title: "LỰA CHỌN GÓI VẬN CHUYỂN HỎA TỐC HOẶC TIẾT KIỆM",
      sections: [
        { title: "Chọn gói phù hợp với ưu tiên của bạn", text: "Tùy theo thời gian mong muốn, loại hàng và ngân sách, SH Express tư vấn các phương án vận chuyển nhanh hoặc tiết kiệm trên từng tuyến quốc tế." },
        { title: "Gói hỏa tốc", subtitle: "Ưu tiên thời gian giao hàng", bullets: ["Phù hợp với chứng từ, hàng mẫu hoặc đơn cần gửi gấp.", "Thời gian dự kiến được xác nhận theo điểm đến và lịch vận chuyển.", "Được tư vấn cách chuẩn bị hàng và thông tin người nhận trước khi gửi."] },
        { title: "Gói tiết kiệm", subtitle: "Tối ưu chi phí cho kế hoạch linh hoạt", bullets: ["Phù hợp với hàng hóa không cần giao gấp.", "Có thể cân nhắc gom nhiều kiện để tối ưu phương án gửi.", "Chi phí và thời gian dự kiến được tư vấn trước khi xác nhận đơn."] },
        { title: "Nhận báo giá", text: "Hãy cung cấp điểm đến, loại hàng, trọng lượng và kích thước kiện hàng để đội ngũ tư vấn đề xuất lựa chọn phù hợp." }
      ], image: "SOURCE/IMAGE/GIAO HÀNG & THEO DÕI.jpg"
    }
  };

  const priceRoutes = [
    { country: "Úc", flag: "SOURCE/Flag/Australia.png", days: "4-7", price: "150,000", href: "bang-gia.html" },
    { country: "Mĩ", flag: "SOURCE/Flag/flag_america.jpg", days: "3-12", price: "250,000", href: "dich-vu-my.html" },
    { country: "Canada", flag: "SOURCE/Flag/Canada.jpg", days: "7-12", price: "280,000", href: "bang-gia.html" },
    { country: "Châu Âu", flag: "SOURCE/Flag/Flag_of_Europe.svg.webp", days: "7-15", price: "240,000", href: "bang-gia.html" },
    { country: "Hàn Quốc", flag: "SOURCE/Flag/South Korea flag.jpg", days: "2-4", price: "100,000", href: "bang-gia.html" },
    { country: "Nhật Bản", flag: "SOURCE/Flag/Japan flag.png", days: "2-4", price: "110,000", href: "dich-vu-nhat.html" }
  ];

  const root = document.querySelector("#detail-root");
  const pageName = document.body.dataset.page;
  const page = pageData[pageName];
  if (!root || (!page && pageName !== "pricing")) return;

  const nav = `
    <div class="announcement">Đặt giao hàng ngay bây giờ <span>·</span> trước 17:00 mỗi ngày <span>++</span></div>
    <header class="site-header"><div class="header-inner">
      <a class="brand" href="index.html#home" aria-label="SH Express - Trang chủ"><img src="SOURCE/LOGO/Logo Khong Nen.png" alt="SH Express" /></a>
      <button class="menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="main-nav" aria-label="Điều hướng chính">
        <a href="index.html#home">TRANG CHỦ</a><a href="index.html#about">GIỚI THIỆU</a>
        <div class="nav-group"><a href="dich-vu-nhat.html">DỊCH VỤ</a><div class="nav-dropdown"><a href="dich-vu-nhat.html">Vận chuyển đến Nhật Bản</a><a href="dich-vu-my.html">Vận chuyển đến Mĩ</a><a href="bang-gia.html">Tuyến vận chuyển quốc tế</a></div></div>
        <a href="bang-gia.html">BẢNG GIÁ</a><a href="index.html#news">TIN TỨC &amp; SỰ KIỆN</a><a href="index.html#contact">LIÊN HỆ</a>
        <a class="profile-link" href="index.html#contact" aria-label="Tài khoản"><svg viewBox="0 0 24 24"><path d="M12 12a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm0 2c-4 0-7.2 2-7.2 4.5V21h14.4v-2.5c0-2.5-3.2-4.5-7.2-4.5Z"/></svg></a>
        <div class="language-switch" aria-label="Ngôn ngữ"><button class="selected" type="button">VN</button><span></span><button type="button">EN</button></div>
      </nav>
    </div></header>`;

  const footer = `
    <section class="detail-cta"><h2>LIÊN HỆ ĐỂ NHẬN TƯ VẤN &amp; BÁO GIÁ CHI TIẾT</h2><a class="button button-gold" href="index.html#contact">LIÊN HỆ NGAY <span>→</span></a></section>
    <footer class="site-footer shared-home-footer"><div class="footer-main">
      <div class="footer-brand"><a href="index.html#home"><img src="SOURCE/LOGO/Logo Khong Nen.png" alt="SOHA Express" /></a><h3>SOHA EXPRESS<br />CÔNG TY CHUYỂN PHÁT NHANH QUỐC TẾ</h3><p>SOHA Express – Dịch vụ vận chuyển hàng hóa quốc tế chuyên nghiệp, kết nối Việt Nam với Mỹ, Canada, Anh và các nước châu Á. Cam kết dịch vụ tận tâm, chi phí cạnh tranh và giải pháp vận chuyển linh hoạt.</p><div class="social-links"><a href="https://zalo.me/0976757226" aria-label="Zalo"><img src="SOURCE/ICON/zalo.png" alt="" /></a><a href="index.html#contact" aria-label="Facebook"><img src="SOURCE/ICON/facebook.png" alt="" /></a><a href="index.html#contact" aria-label="YouTube"><img src="SOURCE/ICON/youtube.png" alt="" /></a></div></div>
      <div><h3>VỀ CHÚNG TÔI</h3><a href="index.html#about">Giới thiệu</a><a href="index.html#services">Dịch vụ</a><a href="index.html#pricing">Bảng giá cước vận chuyển</a><a href="index.html#news">Tin tức &amp; Sự kiện</a><a href="index.html#contact">Tuyển dụng</a><a href="index.html#contact">Liên hệ</a></div>
      <div><h3>LIÊN HỆ</h3><p>VP chính HCM: 276/169 Thống Nhất, phường An Hội Đông, HCM</p><p>Hotline: 0988 485 972 - 0979 277 902</p><p>Email: cs.sohaexpress@gmail.com</p></div>
    </div><div class="footer-bottom"></div></footer>
    <div class="floating-contact" aria-label="Liên hệ nhanh"><a class="float-phone" href="tel:+84976757226" aria-label="Gọi SH Express"><img src="SOURCE/ICON/hotline.png" alt="" /></a><a class="float-zalo" href="https://zalo.me/0976757226" target="_blank" rel="noopener noreferrer" aria-label="Chat qua Zalo"><img src="SOURCE/ICON/zalo.png" alt="" /></a><a class="float-messenger" href="https://m.me/" target="_blank" rel="noopener noreferrer" aria-label="Chat qua Messenger"><img src="SOURCE/ICON/mess.png" alt="" /></a></div>`;

  const sectionMarkup = (section) => `
    <section class="detail-section">
      <h2>${section.title}</h2>
      ${section.subtitle ? `<h3>${section.subtitle}</h3>` : ""}
      ${section.text ? `<p>${section.text}</p>` : ""}
      ${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      ${section.chips ? `<div class="detail-chips">${section.chips.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
    </section>`;

  const aside = `
    <aside class="detail-aside"><div class="detail-experience"><div class="detail-experience-badge"><strong>5 NĂM</strong><span>Đội ngũ &amp; kinh nghiệm</span></div></div><h2>▸ &nbsp; TIN TỨC MỚI NHẤT</h2>
      <a class="aside-news-card" href="index.html#news"><img src="SOURCE/IMAGE/KHAI BÁO HẢI QUAN.png" alt="Tin tức vận chuyển" /><div><h3>CHÍNH SÁCH NHẬP HÀNG QUỐC TẾ</h3><p>Cập nhật thông tin và lưu ý trước khi gửi hàng.</p></div></a>
      <a class="aside-news-card" href="index.html#news"><img src="SOURCE/IMAGE/ĐÓNG GÓI & BẢO QUẢN.png" alt="Kinh nghiệm gửi hàng" /><div><h3>KINH NGHIỆM ĐÓNG GÓI HÀNG HÓA</h3><p>Chuẩn bị kiện hàng cẩn thận cho hành trình xa.</p></div></a>
    </aside>`;

  const renderPricing = () => `
    <div class="route-panel"><div class="route-grid">
      ${priceRoutes.map(({ country, flag, days, price, href }) => `<article class="route-card"><div class="route-country"><img src="${flag}" alt="Cờ ${country}" loading="lazy" /><div><h3>${country}</h3></div></div><p>Thời gian trung bình: ${days} ngày làm việc</p><p>Đơn giá: <strong>${price}VND/ kg</strong></p><a href="${href}">Xem chi tiết <span aria-hidden="true">→</span></a></article>`).join("")}
    </div></div>`;

  const isPricing = pageName === "pricing";
  const data = page || { category: "DỊCH VỤ / BẢNG GIÁ", title: "BẢNG GIÁ DỊCH VỤ VẬN CHUYỂN QUỐC TẾ", image: "SOURCE/IMAGE/SOHA pic 0.jpg" };
  const body = isPricing
    ? `<div class="detail-breadcrumb"><a href="index.html">TRANG CHỦ</a> / BẢNG GIÁ</div><h1>${data.title}</h1><p class="pricing-intro">Lựa chọn tuyến vận chuyển phù hợp. Thời gian và cước phí thực tế có thể thay đổi theo loại hàng, trọng lượng, kích thước và địa điểm giao nhận. Liên hệ SH Express để được xác nhận báo giá.</p><div class="detail-price-section">${renderPricing()}</div>`
    : `<div class="detail-breadcrumb"><a href="index.html">${data.category.split(" / ")[0]}</a> / ${data.category.split(" / ").slice(1).join(" / ")}</div><h1>${data.title}</h1><img class="detail-photo" src="${data.image}" alt="${data.title}" loading="lazy" />${data.sections.map(sectionMarkup).join("")}<p class="detail-note">Lưu ý: Danh mục hàng nhận gửi, thời gian và chi phí được xác nhận theo từng tuyến và quy định tại thời điểm gửi. Vui lòng liên hệ trước khi gửi các mặt hàng đặc thù.</p>`;

  root.innerHTML = `${nav}<main class="detail-page"><div class="detail-hero" role="img" aria-label="Mạng lưới vận chuyển quốc tế"></div><div class="detail-content${isPricing ? " pricing-layout" : ""}"><article class="detail-article">${body}</article>${isPricing ? "" : aside}</div></main>${footer}`;
  document.title = `${isPricing ? data.title : data.category.split(" / ")[1]} — SH Express`;

  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  menuButton?.addEventListener("click", () => {
    const opened = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!opened));
    mainNav?.classList.toggle("is-open", !opened);
  });
  mainNav?.querySelectorAll(".nav-group > a").forEach((link) => link.addEventListener("click", (event) => {
    const group = link.parentElement;
    if (window.innerWidth <= 780 && !group.classList.contains("expanded")) {
      event.preventDefault();
      group.classList.add("expanded");
    }
  }));
  mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    if (window.innerWidth <= 780 && link.matches(".nav-group > a")) return;
    menuButton?.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  }));
})();
