import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
  constructor(els, revealPoint) {
    this.itemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.revealPoint = revealPoint;
    this.hideInitially();
    this.scrollThrottle = throttle(this.caller.bind(this), 200);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("browser resizing ...");
        this.browserHeight = window.innerHeight;
      }, 300)
    );
  }

  caller() {
    console.log("scrolling ...");
    this.itemsToReveal.forEach((el) => {
      if (!el.isRevealed) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("calculating ... ");
      let scrollPercent =
        (el.getBoundingClientRect().top / this.browserHeight) * 100;
      if (scrollPercent < this.revealPoint) {
        el.classList.add("reveal-item--is-visible");
        el.isRevealed = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => {
      el.classList.add("reveal-item");
      el.isRevealed = false;
    });

    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
