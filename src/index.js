import '../src/normalize.css';
import '../src/style.css';
import '../src/style.mobile.css';


let element = document.querySelector('nav');
let menu = document.querySelector('#open');
let body = document.querySelector('body');
let close = document.querySelector('#close');
menu.addEventListener('click', event => {
  element.style.animation = "openNav 1s 1";
  element.style.left = "0vw";
  element.style.boxShadow = "10px 10px 20px 12px black";
  body.style.overflow = "hidden";
});
close.addEventListener('click', event => {
  element.style.animation = "closeNav 1s 1";
  element.style.left = "100vw";
  body.style.overflow = "scroll";
  element.style.boxShadow = "none";
});


