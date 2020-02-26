class Parallax {
  constructor(selector, scale = 1.2, speed = 1) {
    this.selector = selector;
    this.scale = scale;
    this.speed = speed;
    this.domElement = document.querySelector(selector);
    this.offset = {
      ...this.getElementOffset()
    };
  }

  setStyle(value) {
    let props = Object.keys(value);
    props.forEach(prop => this.domElement.style[prop] = value[prop])
  }

  getElementOffset() {
    let doc = document.documentElement;
    let box = this.domElement.getBoundingClientRect();
    let top = box.top + window.pageYOffset - doc.clientTop;
    let left = box.left + window.pageXOffset - doc.clientLeft;
    this.top = top;
    this.left = left;

    return { top, left };
  }

  animateElement() {
    let outerTop = this.offset.top - this.domElement.offsetHeight;
    this.setStyle({
      backgroundSize: `${this.scale * 300}%`,
      backgroundPositionY: "0px",
      boxShadow: "0 0 30px 10px #000 inset"
    });

    if (window.scrollY > outerTop) {
      let newValue = outerTop - (window.scrollY * this.speed) * this.scale
      this.setStyle({ backgroundPositionY: `${newValue}px` });
    }
  }

  updatePositionY(element, speed) {
    element.style.overflow = "hidden";
    let child = element.firstElementChild;
    if (!child) {
      return;
    }
    child.style.position = "relative";
    child.style.top = `${window.scrollY / (speed * 2)}px`;
  }

  init() {
    let hasChildren = this.domElement.children ? true : false;

    window.addEventListener('scroll', () => this.animateElement());


    if (hasChildren) {
      this.updatePositionY(this.domElement, this.speed);
    }
  }
}


export default Parallax;