import { forEach } from 'lodash';
import preventScroll from 'prevent-scroll';
import stickyHeader from 'sticky-header';
import FixedHeader from './fixed-header';

const click = 'ontouchstart' in window ? 'touchstart' : 'click';

export default class Navigation {
  constructor(element, index){
    this.currentMode = null;
    this.startingMode;
    this.firstTime = true;
    this.menuOpen = false;

    this.nav = element;
    this.toggle = element.querySelector('[data-toggle]');
    this.overlay = element.querySelector('[data-overlay-wrapper]');
    this.navigationLinks = element.querySelectorAll('.nav__link, .fixed-nav__link');
    this.isFixedNav = element.getAttribute("data-fixed-nav") === "true";
    this.block = this.isFixedNav ? 'fixed-nav' : 'nav';

    this.desktopMobileBreakpoint = 992;
    this.setupMobileEvents();

    this.initialise();
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

  initialise() {
    this.setMode(true);
    // handle class toggling for nav bar
    this.toggle.addEventListener(click, this.toggleMenu);
    this.setupResizeHandler();

    if (this.isFixedNav) {
      new FixedHeader(this.nav, this.overlay, document.querySelector('[data-fixed-nav-target]'));
    }
  }

  setupMobileEvents(){
    forEach(this.navigationLinks, (link, index) => {
      link.addEventListener('click', this.mobileLinkClicked);
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
    if(!this.menuOpen) {
      this.openMenu();
      this.menuOpen = true;
    } else {
      this.closeMenu();
      this.menuOpen = false;
    }
  }

  closeMenu(){
    this.menuOpen = false;
    preventScroll.off();
    this.toggle.classList.remove(`${this.block}__menu-button-slices--active`);
    this.overlay.classList.remove(`${this.block}__overlay--active`);
  }

  openMenu(){
    preventScroll.on();
    this.toggle.classList.add(`${this.block}__menu-button-slices--active`);
    this.overlay.classList.add(`${this.block}__overlay--active`);
  }
}
