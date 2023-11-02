const aboutText = document.querySelector('.abt');
const about = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const movement = -scrollY * 0.5; // Adjust the factor as needed for the desired speed
    aboutText.style.left = `${movement}px`;
    about.style.backgroundPosition = `${-movement}px 50%`; // Parallax background effect
});
