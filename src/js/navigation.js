export default class Navigation {
  constructor(){
    this.currentMode = null;
    this.startingMode;
    this.firstTime = true;
    this.menuOpen = false;
    this.toggle = document.querySelector("#toggle");
    this.overlay = document.querySelector("#overlay-wrapper");
    this.desktopMobileBreakpoint = 992;
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
    this.toggle.addEventListener('click', () => {
        this.toggleMenu();
    });
    this.setupResizeHandler();
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
  checkModeForChange() {
    this.setMode(false);
    if (this.startingMode == 'mobile' && this.currentMode == 'desktop') {
      closeMenu();
    }
  }

  toggleMenu(){
    if(!this.menuOpen) {
      this.openMenu();
      this.menuOpen = true;
    } else {
      this.closeMenu();
      this.menuOpen = false;
    }
  }

  closeMenu(){
    this.toggle.classList.add('nav__menu-button-slices');
    this.toggle.classList.remove('nav__menu-button-slices--active');
    this.overlay.classList.add('nav__overlay');
    this.overlay.classList.remove('nav__overlay--active');
  }

  openMenu(){
    this.toggle.classList.add('nav__menu-button-slices--active');
    this.toggle.classList.remove('nav__menu-button-slices');
    this.overlay.classList.add('nav__overlay--active');
    this.overlay.classList.remove('nav__overlay');
  }
}
