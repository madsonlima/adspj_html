var swiper = new Swiper(".slideConteudo", { /* Precisa ser a classe do meu conteúdo do slide */
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /* Torna os cartões responsivos */
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1380: {
            slidesPerView: 4,
        },
    }
  });

/* Menu responsivo */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
  
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
  
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
  
    const mobileNavbar = new MobileNavbar(
        ".botaoMenuResponsivo",
        ".navbarLinks",
        ".navbarLinks li",
    );
    mobileNavbar.init();
