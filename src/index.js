import '../src/normalize.css';
import '../src/style.css';
import '../src/style.mobile.css';


let element = document.querySelector('nav');
let header = document.querySelector('header');
let kyloren = document.querySelector('#kyloren');
let stormtroopers = document.querySelector('#stormtroopers');
let menu = document.querySelector('#open');
let body = document.querySelector('body');
let close = document.querySelector('#close');
let ad = document.querySelector('#ad');
menu.addEventListener('click', event => {
  element.style.animation = "openNav 1s 1";
  element.style.left = "0vw";
  body.style.overflow = "hidden";
  element.style.boxShadow = "10px 10px 20px 12px black";
});
close.addEventListener('click', event => {
  element.style.animation = "closeNav 1s 1";
  element.style.left = "100vw";
  body.style.overflow = "scroll";
  element.style.boxShadow = "none";
});

window.addEventListener('scroll', event => {
  if (window.innerWidth > 900) {
    if (window.scrollY > 627 && window.scrollY < 1100) {
      ad.style.marginTop = `${window.scrollY - 627 + 55}px`;
    } else if (window.scrollY < 627) {
      ad.style.marginTop = 0;
    }
  }
});


const Parallax = (domElement, operator) => {
  domElement.style.backgroundSize = "auto"
  window.addEventListener('scroll', event => {
    domElement.style.backgroundPosition = `center ${(window.scrollY / operator - window.scrollY) / window.innerWidth*50}px`;
    if (domElement.children) {
      let { firstElementChild } = domElement.firstElementChild;
      firstElementChild.style.backgroundPosition = `0px ${(window.scrollY / operator - window.scrollY) / window.innerWidth*50}px`;
    }
  });
};

const headerParallax = new Parallax(header, -2);
const kylorenParallax = new Parallax(kyloren, 7);

[headerParallax, kylorenParallax].map(item => item());



