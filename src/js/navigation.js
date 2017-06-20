import $ from 'jquery';

export default class Navigation {
  constructor(){
    this.currentMode = null;
  	this.startingMode;
  	this.firstTime = true;
  	this.menuOpen = false;
  	this.toggle = $("#toggle");
  	this.overlay = $("#overlay-wrapper");
  }

	start() {
		setMode(true);
		// handle class toggling for nav bar
		this.toggle.addEventListener('click', () => {
			this.classList.toggle('active');
			this.toggleoverlay.classList.toggle('open');
			document.documentElement.classList.toggle('menu-open');
			//@TODO sort out ie9 toggle
			document.body.classList.toggle('block-scroll');
			toggleScroll();
		});
		setupResizeHandler();
	}

	toggleScroll() {
		if(!menuOpen) {
			blockScroll();
			menuOpen = true;
		} else {
			unBlockScroll();
			menuOpen = false;
		}
	}

	blockScroll() {
		document.body.addEventListener('touchmove', stopScroll);
	}

	unBlockScroll() {
		document.body.removeEventListener('touchmove', stopScroll);
	}

	stopScroll(e) {
		e.preventDefault();
	}

	setupResizeHandler() {
		window.addEventListener('resize', checkModeForChange);
		checkModeForChange();
	}

	// set current state change on resize
	setMode(firstTime) {
		// determine width
		let width = $(window).width();
		// work out if we're in desktop/mobile navigation
		if (width < 992){
			currentMode = 'mobile';
			if (firstTime) {
				startingMode = 'mobile';
			}
		} else {
			currentMode = 'desktop';
			if (firstTime) {
				startingMode = 'desktop';
			}
		}
	}

	// check for change and remove mobile nav if necessary
	checkModeForChange() {
		console.log("resize");
		setMode(false);
		if (startingMode == 'mobile' && currentMode == 'desktop') {
			// deactivate menu
			toggle.classList.remove('active');
			overlay.classList.remove('open');
			document.documentElement.classList.remove('menu-open');
			document.body.classList.remove('block-scroll');
		}
	}
}
