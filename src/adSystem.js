const adSystem = (event, element) => {
  if (window.innerWidth > 900) {
    if (window.scrollY > 627 && window.scrollY < 1100) {
      element.style.marginTop = `${window.scrollY - 627 + 55}px`;
    } else if (window.scrollY < 627) {
      element.style.marginTop = 0;
    }
  }
}

export default adSystem;