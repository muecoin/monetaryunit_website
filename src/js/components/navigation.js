import preventScroll from 'prevent-scroll';
import stickyHeader from 'sticky-header';

const click = 'ontouchstart' in window ? 'touchstart' : 'click';

export default class Navigation {
  constructor(){
    this.currentMode = null;
    this.startingMode;
    this.firstTime = true;
    this.menuOpen = false;
    this.nav = document.querySelector(".nav");
    this.toggle = document.querySelector("#toggle");
    this.overlay = document.querySelector("#overlay-wrapper");
    this.desktopMobileBreakpoint = 992;
    this.navigationLinks;
    this.setupMobileEvents();
  }

  getBrowserWidth() {
    return Math.max(
      document.documentElement["clientWidth"],
      document.body["scrollWidth"],
      document.documentElement["scrollWidth"],
      document.body["offsetWidth"],
      document.documentElement["offsetWidth"]
    );
  }

  start() {
    this.setMode(true);
    // handle class toggling for nav bar
    this.toggle.addEventListener(click, this.toggleMenu);
    this.setupResizeHandler();
    // @TODO fixed header
    // make '.nav' stick to top 100px
    //stickyHeader(this.nav, 0);
  }

  setupMobileEvents(){
    this.navigationLinks = document.querySelectorAll('.nav__link');
    this.navigationLinks.forEach((link, index) => {
      link.addEventListener(click, this.mobileLinkClicked);
    });
  }

  mobileLinkClicked = (e) => {
    this.closeMenu();
  }

  stopScroll(e) {
    e.preventDefault();
  }

  setupResizeHandler() {
    window.addEventListener('resize', this.checkModeForChange);
    this.checkModeForChange();
  }

  // set current state change on resize
  setMode(firstTime) {
    // determine width
    let width = this.getBrowserWidth();
    // work out if we're in desktop/mobile navigation
    if (width < this.desktopMobileBreakpoint){
      this.currentMode = 'mobile';
      if (firstTime) {
        this.startingMode = 'mobile';
      }
    } else {
    this.currentMode = 'desktop';
      if (firstTime) {
        this.startingMode = 'desktop';
      }
    }
  }

  // check for change and remove mobile nav if necessary
  checkModeForChange = () => {
    this.setMode(false);
    if (this.startingMode == 'mobile' && this.currentMode == 'desktop') {
      this.closeMenu();
    }
  }

  toggleMenu = (e) => {
    const toggle = e.target;
    if(!this.menuOpen) {
      this.openMenu();
      console.log("open")
      this.menuOpen = true;
    } else {
      this.closeMenu();
      this.menuOpen = false;
    }
  }

  closeMenu(){
    this.menuOpen = false;
    preventScroll.off();
    this.toggle.classList.add('nav__menu-button-slices');
    this.toggle.classList.remove('nav__menu-button-slices--active');
    this.overlay.classList.add('nav__overlay');
    this.overlay.classList.remove('nav__overlay--active');
  }

  openMenu(){
    preventScroll.on();
    this.toggle.classList.add('nav__menu-button-slices--active');
    this.toggle.classList.remove('nav__menu-button-slices');
    this.overlay.classList.add('nav__overlay--active');
    this.overlay.classList.remove('nav__overlay');
  }
}
