// Funzione per tornare in cima alla pagina
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostra o nasconde il pulsante in base allo scroll
function toggleScrollButton() {
    const btn = document.getElementById("btnTop");
    if (window.scrollY > 200) { // appare dopo 200px di scroll
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnTop");

    // Nascondi il pulsante all'inizio
    btn.style.display = "none";

    // Event listener per il click
    btn.addEventListener("click", scrollToTop);

    // Event listener per lo scroll
    window.addEventListener("scroll", toggleScrollButton);
});
