import { set } from "lodash";
import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/reveal-on-scroll";
import StickyHeader from "./modules/sticky-header";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*WebpackChunkName: "modal" */ "./modules/modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => {
          console.log("There was a problem loading the modal module.");
        });
    } else {
      modal.openModal;
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
