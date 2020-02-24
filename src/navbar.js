const NavBarMobile = (navBar, opener, closer) => {
  let body = document.body;

  opener.addEventListener('click', event => {
    navBar.style.animation = "openNav 1s 1";
    navBar.style.left = "0vw";
    body.style.overflow = "hidden";
    navBar.style.boxShadow = "10px 10px 20px 12px black";
  });

  closer.addEventListener('click', event => {
    navBar.style.animation = "closeNav 1s 1";
    navBar.style.left = "100vw";
    body.style.overflow = "scroll";
    navBar.style.boxShadow = "none";
  });
}

export default NavBarMobile;