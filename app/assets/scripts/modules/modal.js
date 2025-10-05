class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    // Closed
    this.closeIcon.addEventListener("click", () => this.closeModal());

    // Random
    document.addEventListener("keyup", (e) => this.randomKey(e));
  }

  openModal() {
    this.modal.classList.add("modal--is-visible");
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  randomKey(e) {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      this.closeModal();
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      ` 
        <!-- Modal Section -->
    <div class="modal">
      <div class="modal__inner">
        <h2
          class="section-title section-title--blue section-title--less-margin"
        >
          <img src="assets/images/icons/mail.svg" class="section-title__icon" />
          Хамт <strong>Аялах</strong>
        </h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">
            Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та
            одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох
            боломжтой!
          </p>
        </div>
        <div class="social-icons">
          <div>
            <a href="https://www.facebook.com/" class="social-icons__icon"
              ><img src="assets/images/icons/facebook.svg" alt="Facebook"
            /></a>
            <a href="https://www.x.com/" class="social-icons__icon"
              ><img src="assets/images/icons/twitter.svg" alt="Twitter"
            /></a>
          </div>
          <div>
            <a href="https://www.instagram.com/" class="social-icons__icon"
              ><img src="assets/images/icons/instagram.svg" alt="Instagram"
            /></a>
            <a href="https://www.youtube.com/" class="social-icons__icon"
              ><img src="assets/images/icons/youtube.svg" alt="YouTube"
            /></a>
          </div>
        </div>
      </div>
      <div class="modal__close">×</div>
    </div>
`
    );
  }
}

export default Modal;
