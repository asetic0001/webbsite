const aboutText = document.querySelector('.abt');
const about = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const movement = -scrollY * 0.5; // Adjust the factor as needed for the desired speed
    aboutText.style.left = `${movement}px`;
    about.style.backgroundPosition = `${-movement}px 50%`; // Parallax background effect
});
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

import gsap from gsap;
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

const menuBtn = document.querySelector('.menu');
const layout = document.querySelector('.layout');
const overlay = document.querySelector('.overlay');
const menuSVG = document.querySelector('.menu svg path');
const menuItems = gsap.utils.toArray('ul li a');

let menuOpen = false;

gsap.set(overlay, {
    scaleY: 0
})

gsap.set(menuItems, {
    yPercent: 100
})

const navTl = gsap.timeline({
    defaults: {
        ease: 'power4.inOut',
        duration: 1
    }
});

navTl
    .to(layout, {
        scale: 0.95,
    })
    .to(overlay, {
        scaleY: 1
    }, "-=0.5")
    .to(menuSVG, {
        fill: 'white'
    }, "<")
    .to(menuItems, {
        yPercent: 0,
        stagger: 0.1,
        duration: 2
    }, "-=1.5")
navTl.pause();

menuBtn.addEventListener('click', () => {
    
    if (!menuOpen) {
        navTl.play();
        menuOpen = true;
    } else {
        navTl.reverse();
        menuOpen = false;
    }
})