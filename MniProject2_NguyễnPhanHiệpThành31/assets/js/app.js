document.addEventListener('DOMContentLoaded', () => {
    
    // --- BÀI 1: MOBILE MENU TOGGLE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animation cho nút toggle (tùy chọn)
            menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- BÀI 2: GSAP HERO ANIMATION ---
    // Đảm bảo bạn đã nhúng CDN GSAP trong HTML
    if (typeof gsap !== "undefined") {
        gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
        gsap.from(".btn-animate", { opacity: 0, scale: 0.5, duration: 0.8, delay: 1 });
    }

    // --- BÀI 3: AOS SCROLL ANIMATION ---
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // --- BÀI 4: FORM HANDLING (VALIDATION & LOCAL STORAGE) ---
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Hiệu ứng Loading
            const submitBtn = this.querySelector('button');
            const btnText = submitBtn.querySelector('.btn-text');
            const loader = submitBtn.querySelector('.loader');

            btnText.style.display = 'none';
            loader.style.display = 'block';

            // Thu thập dữ liệu
            const formData = {
                name: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                date: new Date().toLocaleString()
            };

            // Lưu LocalStorage (Bài 4)
            localStorage.setItem('contact_submission', JSON.stringify(formData));

            // Giả lập gửi API
            setTimeout(() => {
                loader.style.display = 'none';
                btnText.style.display = 'block';

                // Hiện Toast thông báo (Bài 4)
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 3000);

                contactForm.reset();
            }, 1500);
        });
    }

    // --- BÀI 5: SWIPER SLIDER ---
    if (typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
            loop: true,
            autoplay: { delay: 3000 },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        });
    }
});
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Chặn load lại trang

        // 1. Hiển thị trạng thái Loading trên nút
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // 2. Lấy dữ liệu (để lưu LocalStorage theo Bài 4)
        const data = {
            ten: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            tinNhan: document.getElementById('message').value
        };
        localStorage.setItem('donHangLienHe', JSON.stringify(data));

        // 3. Giả lập thời gian gửi (ví dụ 1.5 giây)
        setTimeout(() => {
            // Tắt loading
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;

            // 4. Hiển thị Toast thành công
            toast.classList.add('show');

            // 5. Xóa dữ liệu form
            contactForm.reset();

            // 6. Ẩn Toast sau 3 giây
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

        }, 1500);
    });
}