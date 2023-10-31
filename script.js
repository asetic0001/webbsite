function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.getElementById('stars-container').appendChild(star);
}

setInterval(createStar, 200); // Create twinkling stars every 200ms

// Show "title" and "about" after scrolling down
window.addEventListener("scroll", () => {
    const title = document.querySelector(".title");
    const about = document.querySelector(".about");
    
    if (window.scrollY > 100) {
        title.classList.remove("hidden");
        about.classList.remove("hidden");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidePanel = document.querySelector(".side-panel");

    menuBtn.addEventListener("click", () => {
        sidePanel.classList.toggle("active");
    });
});
