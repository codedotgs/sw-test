import '../src/normalize.css';
import '../src/style.css';
import '../src/style.mobile.css';
import AdSystem from './adSystem';
import NavBarMobile from './navbar';
import Parallax from './parallax';

// APPLY AD
let ad = document.querySelector('#ad');
window.addEventListener('scroll', event => AdSystem(event, ad));

// APPLY NAVBAR
let navDiv = document.querySelector('nav');
let navOpener = document.querySelector('#open');
let navCloser = document.querySelector('#close');
NavBarMobile.apply(null, [navDiv, navOpener, navCloser]);

// APPLY PARALLAX
let header = document.querySelector('header');
let kyloren = document.querySelector('#kyloren');
Parallax.apply(null, [header, 1.5, 0.9]);
Parallax.apply(null, [kyloren, 1.2, 0.9]);




