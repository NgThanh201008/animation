// 5. CHẾ ĐỘ DARK MODE (Sử dụng classList.toggle)
const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Đổi icon nút
    darkModeBtn.innerText = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 5. CUSTOM CURSOR (Hiệu ứng đi theo chuột)
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline chạy trễ hơn một chút tạo cảm giác mượt (Animation)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// 3. HIỆU ỨNG CUỘN TRANG (Scroll Reveal & Scroll Spy)
const revealElements = document.querySelectorAll(".reveal");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

const scrollHandler = () => {
    const windowHeight = window.innerHeight;

    // 3.1. Scroll Reveal (Các khối hiện ra khi cuộn tới)
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });

    // 3.2. Scroll Spy (Sáng menu tương ứng với Section)
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(currentSection)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", scrollHandler);
// Gọi lần đầu để hiện các phần ở trên cùng
window.addEventListener("load", scrollHandler);