import '../src/normalize.css';
import '../src/style.css';
import '../src/style.mobile.css';


let element = document.querySelector('nav');
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
  if (window.scrollY > 627 && window.scrollY < 1100) {
    ad.style.marginTop = `${window.scrollY - 627 + 55}px`;
  } else if (window.scrollY < 627) {
    ad.style.marginTop = 0;
  }
})

