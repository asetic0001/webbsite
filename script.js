function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.getElementById('stars-container').appendChild(star);
}

setInterval(createStar, 300); 

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidePanel = document.querySelector(".side-panel");

    menuBtn.addEventListener("click", () => {
        sidePanel.classList.toggle("active");
    });
});
