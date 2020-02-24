const getElementOffset = element => {
  let doc = document.documentElement;
  let box = element.getBoundingClientRect();
  let top = box.top + window.pageYOffset - doc.clientTop;
  let left = box.left + window.pageXOffset - doc.clientLeft;
  return { top: top, left: left };
}

const Parallax = (domElement, scale = 1.2, speed = 1) => {

  let hasChildren = domElement.children ? true : false;
  let elementOffset = getElementOffset(domElement);
  let outerTop = elementOffset.top - domElement.offsetHeight;
  domElement.style.backgroundSize = `${scale * 300}%`;
  domElement.style.backgroundPositionY = "0px";
  domElement.style.boxShadow = "0 0 30px 10px #000 inset";

  window.addEventListener('scroll', event => {
    if (window.scrollY > outerTop) {
      domElement.style.backgroundPositionY = `${outerTop - (window.scrollY * speed) * scale}px`;
    }
    hasChildren && updatePositionY(event, domElement, speed);
  });
};

let updatePositionY = (e, element, speed) => {
  element.style.overflow = "hidden";
  let child = element.firstElementChild;
  if(!child) {
    return;
  }
  child.style.position = "relative";
  child.style.top = `${window.scrollY / (speed * 2)}px`;
};

export default Parallax;