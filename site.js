function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleScrollButton() {
    const btn = document.getElementById("btnTop");

    if (!btn) {
        return;
    }

    btn.style.display = window.scrollY > 260 ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnTop");
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.getElementById("mainNav");

    if (btn) {
        btn.style.display = "none";
        btn.addEventListener("click", scrollToTop);
        window.addEventListener("scroll", toggleScrollButton);
    }

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("is-open");

            navToggle.classList.toggle("is-open", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            navToggle.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                navToggle.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.setAttribute("aria-label", "Apri menu");
            });
        });
    }

});
