const adSystem = (event, element, navbarHeight=55) => {
  if (window.innerWidth > 900) {
    if (window.scrollY > (627 - navbarHeight) && window.scrollY < 1100) {
      element.style.marginTop = `${window.scrollY - 627 + navbarHeight}px`;
    } else if (window.scrollY < 627) {
      element.style.marginTop = 0;
    }
  }
}

export default adSystem;