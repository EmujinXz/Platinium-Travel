import "../styles/styles.css";
import MobileMenu from "./modules/mobile-menu";

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
