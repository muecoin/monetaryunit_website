export default class FixedHeader {
  constructor(fixedHeader, overlay, element){
    this.target = element;
    this.fixedHeader = fixedHeader;
    this.overlay = overlay;

    this.headerClassName = this.fixedHeader.classList[0];
    this.headerClassNameActive = this.headerClassName + '--active';

    this.positiveOffset = 0;
    this.negativeOffset = 0;
    this.lastPosition = 0;
    this.currentOffset = '';

    this.positiveOffsetTrigger = 100;
    this.negativeOffsetTrigger = 50;

    this.fixedHeaderEnabled = false;

    this.initialise();
  }

  initialise() {
    this.addScrollEvent();
  }

  addScrollEvent() {
    window.addEventListener( 'scroll', this.scrollPositionHandler, false);
  }

  scrollPositionHandler = (e) => {
    this.currentScrollDistance = window.scrollY;

    if (this.outOfHeaderZone()) {
      // if past the min scroll distance then begin calculating
      if (this.currentScrollDistance > this.lastPosition) {
        const offsetAmount = this.currentScrollDistance - this.lastPosition;
        // select positive as current direction
        this.currentOffset = 'positive';
        // reset negative counter
        this.negativeOffset = 0;
        // when scroll down add to positive counter
        this.positiveOffset = this.positiveOffset + offsetAmount;
        // show menu
        if (this.positiveOffset > this.positiveOffsetTrigger) {
          this.hideFixedHeader();
        }
      }

      // when move up add to negative counter
      if (this.currentScrollDistance < this.lastPosition) {
        const offsetAmount = this.lastPosition - this.currentScrollDistance;
        // select negative as current direction
        this.currentOffset = 'negative';
        // reset positive counter
        this.positiveOffset = 0;
        // when scroll down add to negative counter
        this.negativeOffset = this.negativeOffset + offsetAmount;
        if (this.negativeOffset > this.negativeOffsetTrigger) {
          this.showFixedHeader();
        }
      }
      this.lastPosition = window.scrollY;
    } else {
      if(this.overlay && this.overlay.classList.contains('fixed-nav__overlay--active')) {
        return;
      }

      this.hideFixedHeader();
    }
  }

  outOfHeaderZone() {
    if (window.scrollY > this.target.offsetHeight - 80) {
      return true;
    }
    return false;
  }

  showFixedHeader(){
    if (!this.fixedHeaderEnabled) {
      this.fixedHeader.classList.add(this.headerClassNameActive);
      this.fixedHeader.classList.remove(this.headerClassName);
      this.fixedHeaderEnabled = true;
    }
  }

  hideFixedHeader(){
    if (this.fixedHeaderEnabled) {
      this.fixedHeader.classList.add(this.headerClassName);
      this.fixedHeader.classList.remove(this.headerClassNameActive);
      this.fixedHeaderEnabled = false;
    }
  }
}
